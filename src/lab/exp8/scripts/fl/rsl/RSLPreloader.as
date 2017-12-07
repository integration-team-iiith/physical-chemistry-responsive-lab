package fl.rsl
{
   import flash.events.EventDispatcher;
   import flash.display.MovieClip;
   import flash.display.Loader;
   import flash.utils.ByteArray;
   import flash.system.LoaderContext;
   import flash.events.Event;
   import flash.events.IOErrorEvent;
   import flash.system.ApplicationDomain;
   import flash.utils.getTimer;
   import flash.events.ProgressEvent;
   import flash.events.SecurityErrorEvent;
   import flash.events.ErrorEvent;
   import fl.events.RSLEvent;
   import fl.events.RSLErrorEvent;
   import flash.display.Stage;
   
   public class RSLPreloader extends EventDispatcher
   {
       
      
      protected var mainTimeline:MovieClip;
      
      protected var contentClassName:String;
      
      protected var loaderAnim:Loader;
      
      protected var contentLoader:Loader;
      
      protected var _rslInfoList:Array;
      
      protected var loaderList:Array;
      
      protected var numRSLComplete:int;
      
      protected var numRSLFailed:int;
      
      protected var failedURLs:Array;
      
      protected var enterFrameClip:MovieClip;
      
      protected var _debugWaitTime:int;
      
      protected var debugWaitStart:int;
      
      public function RSLPreloader(param1:MovieClip = null)
      {
         super();
         this.mainTimeline = param1;
         this._rslInfoList = new Array();
         this.loaderList = new Array();
         this.debugWaitStart = -1;
      }
      
      public function set debugWaitTime(param1:int) : void
      {
         this._debugWaitTime = param1;
      }
      
      public function get debugWaitTime() : int
      {
         return this._debugWaitTime;
      }
      
      public function get numRSLInfos() : int
      {
         return this._rslInfoList.length;
      }
      
      public function getRSLInfoAt(param1:int) : RSLInfo
      {
         return this._rslInfoList[param1];
      }
      
      public function addRSLInfo(param1:RSLInfo) : void
      {
         this._rslInfoList.push(param1);
      }
      
      public function start(param1:Class = null, param2:String = null) : void
      {
         var loaderBytes:ByteArray = null;
         var lc:LoaderContext = null;
         var preloaderAnimClass:Class = param1;
         var contentClassName:String = param2;
         this.contentClassName = contentClassName;
         try
         {
            if(this.mainTimeline != null && preloaderAnimClass != null)
            {
               loaderBytes = new preloaderAnimClass() as ByteArray;
            }
         }
         catch(e:Error)
         {
         }
         if(loaderBytes == null)
         {
            this.loadRSLFiles();
         }
         else
         {
            this.loaderAnim = new Loader();
            this.mainTimeline.addChild(this.loaderAnim);
            this.loaderAnim.contentLoaderInfo.addEventListener(Event.COMPLETE,this.loaderAnimLoaded);
            this.loaderAnim.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,this.loaderAnimError);
            lc = new LoaderContext(false,new ApplicationDomain());
            if(lc.hasOwnProperty("allowLoadBytesCodeExecution"))
            {
               lc["allowLoadBytesCodeExecution"] = true;
            }
            this.loaderAnim.loadBytes(loaderBytes,lc);
         }
      }
      
      public function loadContent() : void
      {
         var _loc1_:Class = Class(this.mainTimeline.loaderInfo.applicationDomain.getDefinition(this.contentClassName));
         var _loc2_:ByteArray = ByteArray(new _loc1_());
         this.contentLoader = new Loader();
         this.mainTimeline.addChild(this.contentLoader);
         this.contentLoader.contentLoaderInfo.addEventListener(Event.COMPLETE,this.contentComplete);
         var _loc3_:LoaderContext = new LoaderContext(false,this.mainTimeline.loaderInfo.applicationDomain);
         if(_loc3_.hasOwnProperty("allowLoadBytesCodeExecution"))
         {
            _loc3_["allowLoadBytesCodeExecution"] = true;
         }
         this.contentLoader.loadBytes(_loc2_,_loc3_);
      }
      
      protected function loaderAnimLoaded(param1:Event) : void
      {
         var fn:Function = null;
         var e:Event = param1;
         try
         {
            fn = this.loaderAnim.content["setRSLPreloader"] as Function;
            if(fn != null)
            {
               fn(this);
            }
         }
         catch(e:Error)
         {
         }
         this.loadRSLFiles();
      }
      
      protected function loaderAnimError(param1:IOErrorEvent) : void
      {
         var e:IOErrorEvent = param1;
         try
         {
            this.mainTimeline.removeChild(this.loaderAnim);
         }
         catch(e:Error)
         {
         }
         this.loaderAnim = null;
         this.loadRSLFiles();
      }
      
      protected function loadRSLFiles(param1:Event = null) : void
      {
         var _loc3_:RSLInfo = null;
         if(this._debugWaitTime > 0)
         {
            if(this.debugWaitStart < 0)
            {
               this.debugWaitStart = getTimer();
               this.enterFrameClip = this.mainTimeline == null?new MovieClip():this.mainTimeline;
               this.enterFrameClip.addEventListener(Event.ENTER_FRAME,this.loadRSLFiles);
               return;
            }
            if(getTimer() - this.debugWaitStart < this._debugWaitTime)
            {
               return;
            }
            this.enterFrameClip.removeEventListener(Event.ENTER_FRAME,this.loadRSLFiles);
            this.enterFrameClip = null;
         }
         var _loc2_:int = 0;
         while(_loc2_ < this._rslInfoList.length)
         {
            _loc3_ = this._rslInfoList[_loc2_];
            _loc3_.addEventListener(ProgressEvent.PROGRESS,this.handleProgress);
            _loc3_.addEventListener(Event.COMPLETE,this.loadComplete);
            _loc3_.addEventListener(IOErrorEvent.IO_ERROR,this.loadFailed);
            _loc3_.addEventListener(SecurityErrorEvent.SECURITY_ERROR,this.loadFailed);
            this._rslInfoList[_loc2_].load();
            _loc2_++;
         }
      }
      
      protected function loadComplete(param1:Event) : void
      {
         var _loc2_:RSLInfo = param1.target as RSLInfo;
         if(_loc2_ == null)
         {
            return;
         }
         param1.target.removeEventListener(ProgressEvent.PROGRESS,this.handleProgress);
         param1.target.removeEventListener(Event.COMPLETE,this.loadComplete);
         param1.target.removeEventListener(IOErrorEvent.IO_ERROR,this.loadFailed);
         param1.target.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,this.loadFailed);
         this.numRSLComplete++;
         this.loaderList.push(_loc2_.loader);
         if(this.numRSLComplete + this.numRSLFailed >= this._rslInfoList.length)
         {
            this.finish();
         }
      }
      
      protected function loadFailed(param1:ErrorEvent) : void
      {
         var _loc2_:RSLInfo = param1.target as RSLInfo;
         if(_loc2_ == null)
         {
            return;
         }
         if(_loc2_.failed)
         {
            param1.target.removeEventListener(ProgressEvent.PROGRESS,this.handleProgress);
            param1.target.removeEventListener(Event.COMPLETE,this.loadComplete);
            param1.target.removeEventListener(IOErrorEvent.IO_ERROR,this.loadFailed);
            param1.target.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,this.loadFailed);
            this.failedURLs = this.failedURLs == null?_loc2_.rslURLs:this.failedURLs.concat(_loc2_.rslURLs);
            this.numRSLFailed++;
            if(this.numRSLComplete + this.numRSLFailed >= this._rslInfoList.length)
            {
               this.finish();
            }
         }
      }
      
      protected function handleProgress(param1:ProgressEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc5_:RSLInfo = null;
         var _loc4_:int = 0;
         while(_loc4_ < this._rslInfoList.length)
         {
            _loc5_ = this._rslInfoList[_loc4_];
            if(!_loc5_.failed)
            {
               _loc2_ = _loc2_ + _loc5_.bytesLoaded;
               _loc3_ = _loc3_ + _loc5_.bytesTotal;
            }
            _loc4_++;
         }
         if(_loc3_ > 0)
         {
            dispatchEvent(new RSLEvent(RSLEvent.RSL_PROGRESS,false,false,this.numRSLComplete,this.numRSLFailed,this._rslInfoList.length,_loc2_,_loc3_));
         }
      }
      
      protected function finish() : void
      {
         var calledFn:Boolean = false;
         var fn:Function = null;
         try
         {
            if(this.loaderAnim != null)
            {
               if(this.numRSLFailed > 0)
               {
                  fn = this.loaderAnim.content["handleRSLError"] as Function;
                  if(fn != null)
                  {
                     fn(this.completeCallback,this.numRSLComplete,this.numRSLFailed,this.failedURLs);
                     calledFn = true;
                  }
               }
               else
               {
                  fn = this.loaderAnim.content["handleRSLComplete"] as Function;
                  if(fn != null)
                  {
                     fn(this.completeCallback);
                     calledFn = true;
                  }
               }
            }
         }
         catch(e:Error)
         {
            calledFn = false;
         }
         if(!calledFn)
         {
            this.completeCallback();
         }
      }
      
      protected function completeCallback() : void
      {
         if(this.mainTimeline == null || this.contentClassName == null)
         {
            if(this.numRSLFailed > 0)
            {
               dispatchEvent(new RSLErrorEvent(RSLErrorEvent.RSL_LOAD_FAILED,false,false,this.numRSLComplete,this.numRSLFailed,this._rslInfoList.length,this.failedURLs));
            }
            else
            {
               dispatchEvent(new RSLEvent(RSLEvent.RSL_LOAD_COMPLETE,false,false,this.numRSLComplete,this.numRSLFailed,this._rslInfoList.length));
            }
         }
         else
         {
            this.mainTimeline.play();
         }
      }
      
      protected function contentComplete(param1:Event) : void
      {
         var myStage:Stage = null;
         var e:Event = param1;
         if(this.loaderAnim != null)
         {
            try
            {
               this.mainTimeline.removeChild(this.mainTimeline.getChildAt(0));
            }
            catch(e:Error)
            {
            }
            try
            {
               this.mainTimeline.removeChild(this.loaderAnim);
            }
            catch(e:Error)
            {
            }
            if(this.loaderAnim.hasOwnProperty("unloadAndStop"))
            {
               this.loaderAnim.unloadAndStop(true);
            }
            else
            {
               this.loaderAnim.unload();
            }
         }
         this.contentLoader.content["__rslLoaders"] = this.loaderList;
         try
         {
            myStage = this.mainTimeline.parent as Stage;
         }
         catch(se:SecurityError)
         {
            myStage = null;
         }
         if(myStage == null)
         {
            this.mainTimeline.addChild(this.contentLoader.content);
         }
         else
         {
            myStage.addChildAt(this.contentLoader.content,myStage.getChildIndex(this.mainTimeline));
            try
            {
               myStage.removeChild(this.mainTimeline);
            }
            catch(e:Error)
            {
            }
         }
         try
         {
            if(this.mainTimeline["__rslPreloader"] == this)
            {
               this.mainTimeline["__rslPreloader"] = null;
            }
            return;
         }
         catch(e:Error)
         {
            return;
         }
      }
   }
}
