package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   
   public dynamic class animation_4_31 extends MovieClip
   {
       
      
      public var red_line:MovieClip;
      
      public var green_line:MovieClip;
      
      public var blue_line:MovieClip;
      
      public function animation_4_31()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      function frame1() : *
      {
         red_line.gotoAndStop(1);
         blue_line.gotoAndStop(1);
         green_line.gotoAndStop(1);
      }
   }
}
