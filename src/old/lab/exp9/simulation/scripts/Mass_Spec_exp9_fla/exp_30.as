package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public dynamic class exp_30 extends MovieClip
   {
       
      
      public var vibrating9:MovieClip;
      
      public var box1:MovieClip;
      
      public var text_2:MovieClip;
      
      public var btn_4:SimpleButton;
      
      public var vibrating8:MovieClip;
      
      public var box2:MovieClip;
      
      public var text_3:MovieClip;
      
      public var btn_5:SimpleButton;
      
      public var vibrating7:MovieClip;
      
      public var wires:MovieClip;
      
      public var text_4:MovieClip;
      
      public var vibrating6:MovieClip;
      
      public var vibrating5:MovieClip;
      
      public var animation_3_symbol:MovieClip;
      
      public var vibrating4:MovieClip;
      
      public var arro1:MovieClip;
      
      public var vibrating3:MovieClip;
      
      public var arro2:MovieClip;
      
      public var vibrating2:MovieClip;
      
      public var vibrating1:MovieClip;
      
      public var vibrating_atoms1:MovieClip;
      
      public var animation_1:MovieClip;
      
      public var visible_2_symbol:MovieClip;
      
      public var animation_4:MovieClip;
      
      public var btn_1:SimpleButton;
      
      public var btn_2:SimpleButton;
      
      public var text_1:MovieClip;
      
      public var btn_3:SimpleButton;
      
      public var count_1:Number;
      
      public var count2:Number;
      
      public var flag:Number;
      
      public function exp_30()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      public function showanimation1(param1:Event) : void
      {
         var e:Event = param1;
         if(flag == 1)
         {
            var play_vibrating:Function = function(param1:Event):void
            {
               if(param1.target.currentFrame == 75)
               {
                  wires.gotoAndPlay(1);
               }
               if(param1.target.currentFrame == 80 && flag == 1)
               {
                  vibrating1.gotoAndPlay(1);
                  vibrating2.gotoAndPlay(36);
                  vibrating3.gotoAndPlay(26);
                  vibrating4.gotoAndPlay(50);
                  vibrating5.gotoAndPlay(20);
                  vibrating6.gotoAndPlay(12);
                  vibrating7.gotoAndPlay(22);
                  vibrating8.gotoAndPlay(16);
                  vibrating9.gotoAndPlay(18);
                  vibrating1.visible = true;
                  vibrating2.visible = true;
                  vibrating3.visible = true;
                  vibrating4.visible = true;
                  vibrating5.visible = true;
                  vibrating6.visible = true;
                  vibrating7.visible = true;
                  vibrating8.visible = true;
                  vibrating9.visible = true;
                  flag = 2;
               }
            };
            trace("in 1");
            arro1.visible = true;
            box1.visible = true;
            text_1.visible = true;
            animation_1.gotoAndPlay(1);
            animation_1.addEventListener(Event.ENTER_FRAME,play_vibrating);
         }
      }
      
      public function start2(param1:Event) : void
      {
         if(vibrating1.currentFrame == 60)
         {
            showanimation2(param1);
            vibrating1.gotoAndStop(1);
         }
      }
      
      public function showanimation2(param1:Event) : void
      {
         if(flag == 2)
         {
            btn_2.enabled = false;
            btn_1.enabled = false;
            btn_1.enabled = false;
            text_1.visible = false;
            text_2.visible = true;
            arro1.visible = false;
            box1.visible = false;
            animation_1.visible = false;
            animation_1.enabled = false;
            wires.visible = false;
            wires.enabled = false;
            arro1.visible = false;
            box1.visible = false;
            vibrating1.visible = false;
            vibrating2.visible = false;
            vibrating3.visible = false;
            vibrating4.visible = false;
            vibrating5.visible = false;
            vibrating6.visible = false;
            vibrating7.visible = false;
            vibrating8.visible = false;
            vibrating9.visible = false;
            vibrating1.enabled = false;
            vibrating2.enabled = false;
            vibrating3.enabled = false;
            vibrating4.enabled = false;
            vibrating5.enabled = false;
            vibrating6.enabled = false;
            vibrating7.enabled = false;
            vibrating8.enabled = false;
            vibrating9.enabled = false;
            vibrating1.gotoAndStop(1);
            vibrating2.gotoAndStop(36);
            vibrating3.gotoAndStop(26);
            vibrating4.gotoAndStop(50);
            vibrating5.gotoAndStop(20);
            vibrating6.gotoAndStop(12);
            vibrating7.gotoAndStop(22);
            vibrating8.gotoAndStop(16);
            vibrating9.gotoAndStop(18);
            visible_2_symbol.visible = true;
            vibrating_atoms1.visible = true;
            vibrating_atoms1.enabled = true;
            vibrating_atoms1.gotoAndPlay(1);
            vibrating_atoms1.vibrating1.gotoAndPlay(1);
            flag = 3;
         }
      }
      
      public function start3(param1:Event) : void
      {
         if(vibrating_atoms1.vibrating1.currentFrame == 60)
         {
            if(flag == 3)
            {
               showanimation3(param1);
               vibrating_atoms1.vibrating1.gotoAndStop(1);
            }
         }
      }
      
      public function showanimation3(param1:Event) : void
      {
         if(flag == 3)
         {
            btn_1.enabled = false;
            btn_2.enabled = false;
            btn_3.enabled = false;
            text_2.visible = false;
            text_3.visible = true;
            visible_2_symbol.visible = false;
            vibrating_atoms1.visible = false;
            vibrating1.gotoAndStop(1);
            arro2.visible = true;
            box2.visible = true;
            animation_3_symbol.animation_3_symbol_inner.gotoAndPlay(1);
            animation_3_symbol.visible = true;
            flag = 4;
         }
      }
      
      public function start4(param1:Event) : void
      {
         if(animation_3_symbol.animation_3_symbol_inner.currentFrame == 120)
         {
            if(flag == 4)
            {
               showanimation4(param1);
               animation_3_symbol.animation_3_symbol_inner.gotoAndStop(1);
            }
         }
      }
      
      public function showanimation4(param1:Event) : void
      {
         if(flag == 4)
         {
            btn_1.enabled = false;
            btn_2.enabled = false;
            btn_3.enabled = false;
            btn_4.enabled = false;
            text_3.visible = false;
            text_4.visible = true;
            arro2.visible = false;
            box2.visible = false;
            animation_3_symbol.animation_3_symbol_inner.playedd.visible = false;
            animation_3_symbol.visible = false;
            animation_4.visible = true;
            animation_4.red_line.gotoAndPlay(1);
            animation_4.blue_line.gotoAndPlay(1);
            animation_4.green_line.gotoAndPlay(1);
            flag = 5;
         }
      }
      
      function frame1() : *
      {
         count_1 = 0;
         count2 = 0;
         flag = 1;
         arro1.visible = false;
         box1.visible = false;
         btn_1.enabled = false;
         btn_2.enabled = false;
         btn_3.enabled = false;
         btn_4.enabled = false;
         btn_5.enabled = false;
         text_1.visible = false;
         text_2.visible = false;
         text_3.visible = false;
         text_4.visible = false;
         animation_1.gotoAndStop(1);
         animation_4.visible = false;
         animation_4.gotoAndStop(1);
         arro2.visible = false;
         box2.visible = false;
         visible_2_symbol.visible = false;
         vibrating1.visible = false;
         vibrating2.visible = false;
         vibrating3.visible = false;
         vibrating4.visible = false;
         vibrating5.visible = false;
         vibrating6.visible = false;
         vibrating7.visible = false;
         vibrating8.visible = false;
         vibrating9.visible = false;
         vibrating_atoms1.visible = false;
         vibrating_atoms1.enabled = false;
         vibrating_atoms1.gotoAndStop(1);
         animation_3_symbol.animation_3_symbol_inner.playedd.gotoAndStop(1);
         animation_3_symbol.visible = false;
         vibrating1.gotoAndStop(1);
         vibrating2.gotoAndStop(1);
         vibrating3.gotoAndStop(1);
         vibrating4.gotoAndStop(1);
         vibrating5.gotoAndStop(1);
         vibrating6.gotoAndStop(1);
         vibrating7.gotoAndStop(1);
         vibrating8.gotoAndStop(1);
         vibrating9.gotoAndStop(1);
         wires.gotoAndStop(1);
         btn_1.addEventListener(MouseEvent.CLICK,showanimation1);
         vibrating1.addEventListener(Event.ENTER_FRAME,start2);
         btn_2.addEventListener(MouseEvent.CLICK,showanimation2);
         vibrating_atoms1.vibrating1.addEventListener(Event.ENTER_FRAME,start3);
         btn_3.addEventListener(MouseEvent.CLICK,showanimation3);
         animation_3_symbol.animation_3_symbol_inner.addEventListener(Event.ENTER_FRAME,start4);
         btn_4.addEventListener(MouseEvent.CLICK,showanimation4);
      }
   }
}
