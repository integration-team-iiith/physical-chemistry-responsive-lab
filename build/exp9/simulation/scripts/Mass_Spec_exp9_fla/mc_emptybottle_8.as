package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   
   public dynamic class mc_emptybottle_8 extends MovieClip
   {
       
      
      public var water:MovieClip;
      
      public function mc_emptybottle_8()
      {
         super();
         addFrameScript(0,frame1,39,frame40,44,frame45);
      }
      
      function frame1() : *
      {
         water.gotoAndStop(1);
      }
      
      function frame40() : *
      {
         water.gotoAndStop(1);
         stop();
      }
      
      function frame45() : *
      {
         water.gotoAndStop(2);
      }
   }
}
