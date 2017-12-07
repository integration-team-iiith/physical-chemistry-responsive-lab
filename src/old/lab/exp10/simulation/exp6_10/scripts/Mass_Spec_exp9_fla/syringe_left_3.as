package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   
   public dynamic class syringe_left_3 extends MovieClip
   {
       
      
      public var water:MovieClip;
      
      public function syringe_left_3()
      {
         super();
         addFrameScript(0,frame1,39,frame40,49,frame50,88,frame89);
      }
      
      function frame1() : *
      {
         water.gotoAndStop(1);
      }
      
      function frame40() : *
      {
         stop();
      }
      
      function frame50() : *
      {
         water.gotoAndStop(2);
      }
      
      function frame89() : *
      {
         water.gotoAndStop(2);
         stop();
      }
   }
}
