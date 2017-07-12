package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public dynamic class vibrating_atoms_54 extends MovieClip
   {
       
      
      public var vibrating9:MovieClip;
      
      public var vibrating8:MovieClip;
      
      public var vibrating7:MovieClip;
      
      public var vibrating6:MovieClip;
      
      public var vibrating5:MovieClip;
      
      public var vibrating4:MovieClip;
      
      public var electron1:MovieClip;
      
      public var vibrating3:MovieClip;
      
      public var vibrating2:MovieClip;
      
      public var plus1:MovieClip;
      
      public var vibrating1:MovieClip;
      
      public var electronsdropping2:MovieClip;
      
      public var plus2:MovieClip;
      
      public var plus3:MovieClip;
      
      public var plus4:MovieClip;
      
      public var electronsdropping1:MovieClip;
      
      public var plus5:MovieClip;
      
      public var plus6:MovieClip;
      
      public var plus7:MovieClip;
      
      public var plus8:MovieClip;
      
      public var plus9:MovieClip;
      
      public var count:Number;
      
      public function vibrating_atoms_54()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      public function startsecondelectrondropping(param1:Event) : void
      {
         if(electron1.currentFrame == 15)
         {
            electronsdropping2.gotoAndPlay(1);
         }
      }
      
      public function showions(param1:Event) : void
      {
         if(vibrating1.currentFrame == 15)
         {
            count++;
         }
         if(count == 2)
         {
            plus1.visible = true;
            plus2.visible = true;
            plus3.visible = true;
            plus4.visible = true;
            plus5.visible = true;
            plus6.visible = true;
            plus7.visible = true;
            plus8.visible = true;
            plus9.visible = true;
         }
      }
      
      function frame1() : *
      {
         count = -2;
         plus1.visible = false;
         plus2.visible = false;
         plus3.visible = false;
         plus4.visible = false;
         plus5.visible = false;
         plus6.visible = false;
         plus7.visible = false;
         plus8.visible = false;
         plus9.visible = false;
         vibrating1.gotoAndPlay(1);
         vibrating2.gotoAndPlay(36);
         vibrating3.gotoAndPlay(26);
         vibrating4.gotoAndPlay(50);
         vibrating5.gotoAndPlay(20);
         vibrating6.gotoAndPlay(12);
         vibrating7.gotoAndPlay(22);
         vibrating8.gotoAndPlay(16);
         vibrating9.gotoAndPlay(18);
         plus1.gotoAndPlay(1);
         plus2.gotoAndPlay(36);
         plus3.gotoAndPlay(26);
         plus4.gotoAndPlay(50);
         plus5.gotoAndPlay(20);
         plus6.gotoAndPlay(12);
         plus7.gotoAndPlay(22);
         plus8.gotoAndPlay(16);
         plus9.gotoAndPlay(18);
         electronsdropping2.gotoAndStop(1);
         electron1.addEventListener(Event.ENTER_FRAME,startsecondelectrondropping);
         vibrating1.addEventListener(Event.ENTER_FRAME,showions);
      }
   }
}
