package Mass_Spec_exp8_fla
{
   import flash.display.MovieClip;
   import fl.rsl.RSLPreloader;
   import fl.rsl.RSLInfo;
   import fl.rsl.SWZInfo;
   
   public class MainTimeline__Preloader__ extends MovieClip
   {
       
      
      public var __rslPreloader:RSLPreloader;
      
      public function MainTimeline__Preloader__()
      {
         super();
         addFrameScript(0,this.frame1,1,this.frame2);
      }
      
      public function frame1() : void
      {
         var _loc1_:RSLInfo = null;
         stop();
         this.__rslPreloader = new RSLPreloader(this);
         _loc1_ = new SWZInfo("7421c71f94db4f028e7528b2d278f3fe4dc21273e3cc1c663c569f102564811c");
         _loc1_.addEntry("http://fpdownload.adobe.com/pub/swz/tlf/1.0.0.595/textLayout_1.0.0.595.swz","http://fpdownload.adobe.com/pub/swz/crossdomain.xml");
         _loc1_.addEntry("textLayout_1.0.0.595.swz","");
         this.__rslPreloader.addRSLInfo(_loc1_);
         this.__rslPreloader.start(MainTimeline__LoadingAnimation__,"Mass_Spec_exp8_fla.MainTimeline__Content__");
      }
      
      public function frame2() : void
      {
         stop();
         this.__rslPreloader.loadContent();
      }
   }
}
