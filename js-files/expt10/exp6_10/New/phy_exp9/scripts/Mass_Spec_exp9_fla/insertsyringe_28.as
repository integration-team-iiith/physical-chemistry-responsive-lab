package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   
   public dynamic class insertsyringe_28 extends MovieClip
   {
       
      
      public var syringe:MovieClip;
      
      public function insertsyringe_28()
      {
         super();
         addFrameScript(0,frame1,39,frame40,40,frame41,79,frame80);
      }
      
      function frame1() : *
      {
         play();
         syringe.gotoAndStop(1);
      }
      
      function frame40() : *
      {
         stop();
         syringe.gotoAndPlay(1);
      }
      
      function frame41() : *
      {
         syringe.gotoAndStop(50);
      }
      
      function frame80() : *
      {
         stop();
         syringe.gotoAndPlay(50);
      }
   }
}
