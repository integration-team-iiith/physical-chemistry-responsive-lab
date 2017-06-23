package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   
   public dynamic class mass_spectro_26 extends MovieClip
   {
       
      
      public var water:MovieClip;
      
      public function mass_spectro_26()
      {
         super();
         addFrameScript(0,frame1,39,frame40,40,frame41,79,frame80);
      }
      
      function frame1() : *
      {
         water.gotoAndStop(1);
      }
      
      function frame40() : *
      {
         stop();
      }
      
      function frame41() : *
      {
         water.gotoAndStop(2);
      }
      
      function frame80() : *
      {
         stop();
      }
   }
}
