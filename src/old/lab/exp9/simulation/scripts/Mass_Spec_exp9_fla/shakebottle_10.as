package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   
   public dynamic class shakebottle_10 extends MovieClip
   {
       
      
      public var bottle:MovieClip;
      
      public function shakebottle_10()
      {
         super();
         addFrameScript(0,frame1,29,frame30);
      }
      
      function frame1() : *
      {
         bottle.water.gotoAndStop(2);
         bottle.gotoAndStop(40);
      }
      
      function frame30() : *
      {
         bottle.gotoAndStop(45);
         stop();
      }
   }
}
