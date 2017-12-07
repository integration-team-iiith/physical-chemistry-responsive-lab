package Experiment10_fla
{
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.text.TextField;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      
      public var sample1:SimpleButton;
      
      public var container:MovieClip;
      
      public var sample2:SimpleButton;
      
      public var sampleTxt:TextField;
      
      public var nmr:SimpleButton;
      
      public var ir:SimpleButton;
      
      public var hideExp:MovieClip;
      
      public var ms:SimpleButton;
      
      public var sampleSelected:Number;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      public function showSampleOption1(param1:MouseEvent) : void
      {
         trace(this.loaderInfo.url);
         sampleTxt.text = "Sample 1 Selected";
         sampleSelected = 1;
         hideExp.visible = false;
      }
      
      public function showSampleOption2(param1:MouseEvent) : void
      {
         sampleTxt.text = "Sample 2 Selected";
         sampleSelected = 2;
         hideExp.visible = false;
      }
      
      public function showNmr(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         if(sampleSelected == 1)
         {
            _loc2_ = new URLRequest("Sample1/Magnet.swf");
         }
         else
         {
            _loc2_ = new URLRequest("Sample2/Magnet.swf");
         }
         var _loc3_:Loader = new Loader();
         _loc3_.load(_loc2_);
         addChild(_loc3_);
      }
      
      public function showMs(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         if(sampleSelected == 1)
         {
            _loc2_ = new URLRequest("Sample1/Mass_Spec.swf");
         }
         else
         {
            _loc2_ = new URLRequest("Sample2/Mass_Spec.swf");
         }
         var _loc3_:Loader = new Loader();
         _loc3_.load(_loc2_);
         addChild(_loc3_);
      }
      
      public function showIr(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         if(sampleSelected == 1)
         {
            _loc2_ = new URLRequest("Sample1/IR_Sol.swf");
         }
         else
         {
            _loc2_ = new URLRequest("Sample2/IR_Sol.swf");
         }
         var _loc3_:Loader = new Loader();
         _loc3_.load(_loc2_);
         addChild(_loc3_);
      }
      
      function frame1() : *
      {
         sampleSelected = 0;
         container.visible = false;
         sampleTxt.text = "";
         sample1.addEventListener(MouseEvent.CLICK,showSampleOption1);
         sample2.addEventListener(MouseEvent.CLICK,showSampleOption2);
         nmr.addEventListener(MouseEvent.CLICK,showNmr);
         ms.addEventListener(MouseEvent.CLICK,showMs);
         ir.addEventListener(MouseEvent.CLICK,showIr);
      }
   }
}
