package Mass_Spec_exp9_fla
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.text.TextField;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      
      public var empty:MovieClip;
      
      public var syringe:MovieClip;
      
      public var ep:MovieClip;
      
      public var Evaluate:SimpleButton;
      
      public var fp:MovieClip;
      
      public var shaker:MovieClip;
      
      public var mixer:MovieClip;
      
      public var instruct:TextField;
      
      public var btn0:SimpleButton;
      
      public var insertsyringe:MovieClip;
      
      public var es:MovieClip;
      
      public var btn1:SimpleButton;
      
      public var graph_aspirine:MovieClip;
      
      public var fs:MovieClip;
      
      public var caffeine:SimpleButton;
      
      public var btn2:SimpleButton;
      
      public var btn3:SimpleButton;
      
      public var powder:MovieClip;
      
      public var btn4:SimpleButton;
      
      public var graph_caffeine:MovieClip;
      
      public var aspirine:SimpleButton;
      
      public var drops:MovieClip;
      
      public var syringe1:MovieClip;
      
      public var exp:MovieClip;
      
      public var solvent:MovieClip;
      
      public var ms:MovieClip;
      
      public var graphToChose:Number;
      
      public var startGraph:Number;
      
      public var sequence:Number;
      
      public var playtube:Number;
      
      public var expstarted:Boolean;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,frame1);
      }
      
      public function cleaninst(param1:Event) : void
      {
         if(sequence == 0)
         {
            syringe1.visible = true;
            drops.visible = false;
            syringe.visible = false;
            empty.visible = true;
            shaker.visible = false;
            syringe1.gotoAndPlay(1);
            sequence = 1;
            btn0.visible = false;
            btn0.enabled = false;
            instruct.text = "Click on the sample bottle to transfer small amount (around 1mg) of the substance into the empty sample bottle";
         }
      }
      
      public function insertclean(param1:Event) : void
      {
         if(syringe1.currentFrame == 40)
         {
            syringe1.gotoAndStop(1);
            syringe1.visible = false;
            insertsyringe.visible = true;
            insertsyringe.gotoAndPlay(1);
            playtube = 1;
         }
      }
      
      public function startclean(param1:Event) : void
      {
         if(insertsyringe.currentFrame == 40)
         {
            if(playtube == 1)
            {
               ms.gotoAndPlay(1);
               playtube = 2;
            }
         }
      }
      
      public function fillpowder(param1:Event) : void
      {
         if(sequence == 1)
         {
            drops.visible = false;
            syringe.visible = false;
            empty.visible = true;
            shaker.visible = false;
            fs.visible = true;
            fs.gotoAndPlay(1);
            sequence = 2;
            instruct.text = "Click on the solvent bottle to transfer 5 ml of the solvent (methanol) to the substance taken.";
         }
      }
      
      public function fills(param1:Event) : void
      {
         if(fs.currentFrame == 39)
         {
            fs.visible = false;
            es.visible = true;
            es.gotoAndPlay(1);
         }
      }
      
      public function emptys(param1:Event) : void
      {
         if(es.currentFrame == 30)
         {
            empty.visible = false;
            mixer.visible = true;
            mixer.gotoAndStop(1);
         }
         if(es.currentFrame == 39)
         {
            es.visible = false;
            es.gotoAndStop(1);
         }
      }
      
      public function fillsolvent(param1:Event) : void
      {
         if(sequence == 2)
         {
            fp.visible = true;
            fp.gotoAndPlay(1);
            empty.visible = false;
            shaker.visible = false;
            syringe.visible = false;
            sequence = 3;
            instruct.text = "Click on the sample solution to make a clear solution.";
         }
      }
      
      public function tillend(param1:Event) : void
      {
         if(fp.currentFrame == 29)
         {
            fp.visible = false;
            drops.visible = true;
            drops.gotoAndPlay(1);
            ep.visible = true;
            ep.gotoAndPlay(1);
            mixer.visible = true;
            mixer.gotoAndPlay(1);
         }
      }
      
      public function tillend2(param1:Event) : void
      {
         if(ep.currentFrame == 40)
         {
            ep.visible = false;
         }
      }
      
      public function shakebottle(param1:Event) : void
      {
         if(sequence == 3)
         {
            drops.visible = false;
            empty.visible = false;
            shaker.visible = true;
            mixer.visible = false;
            syringe.visible = false;
            shaker.gotoAndPlay(1);
            sequence = 4;
            btn3.visible = false;
            btn3.enabled = false;
            instruct.text = "Click on the sample solution to draw 1 ml of the sample prepared to load on to the mass spectrometer.";
         }
      }
      
      public function usesyringe(param1:Event) : void
      {
         if(sequence == 4)
         {
            drops.visible = false;
            empty.visible = false;
            shaker.visible = true;
            mixer.visible = false;
            syringe.visible = true;
            syringe.gotoAndPlay(50);
            sequence = 5;
            playtube = 0;
         }
      }
      
      public function insertintru(param1:Event) : void
      {
         if(syringe.currentFrame == 89)
         {
            syringe.gotoAndStop(1);
            syringe.visible = false;
            insertsyringe.visible = true;
            insertsyringe.gotoAndPlay(41);
            playtube = 1;
         }
      }
      
      public function startintru(param1:Event) : void
      {
         if(insertsyringe.currentFrame == 80)
         {
            if(playtube == 1)
            {
               ms.gotoAndPlay(41);
               playtube = 2;
            }
         }
      }
      
      public function hidesyringe(param1:Event) : void
      {
         if(ms.currentFrame == 40 || ms.currentFrame == 80)
         {
            if(playtube == 2)
            {
               insertsyringe.visible = false;
               if(ms.currentFrame == 80)
               {
                  if(!expstarted)
                  {
                     exp.showanimation1(param1);
                     expstarted = true;
                  }
               }
            }
         }
      }
      
      public function showgraph(param1:Event) : void
      {
         if(exp.animation_4.red_line.currentFrame == 49)
         {
            if(exp.flag == 5)
            {
               exp.flag = 6;
               trace("hurray !!!");
               if(graphToChose == 2)
               {
                  graph_aspirine.visible = true;
                  graph_caffeine.visible = false;
                  graph_aspirine.gotoAndPlay(2);
               }
               else
               {
                  graph_aspirine.visible = false;
                  graph_caffeine.visible = true;
                  graph_caffeine.gotoAndPlay(2);
               }
            }
         }
      }
      
      public function hidebottle(param1:Event) : void
      {
         if(drops.currentFrame == 40)
         {
         }
      }
      
      public function gotoPage(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         var _loc3_:URLRequest = null;
         if(graphToChose == 2)
         {
            _loc2_ = new URLRequest("aspirin/aspirin_MS_exp9.html");
            navigateToURL(_loc2_);
         }
         if(graphToChose == 3)
         {
            _loc3_ = new URLRequest("nitrophenol/2-nitrophenol_MS.html");
            navigateToURL(_loc3_);
         }
      }
      
      public function solvent1(param1:MouseEvent) : void
      {
         graphToChose = 2;
         instruct.text = "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway. ";
         aspirine.visible = false;
         caffeine.visible = false;
      }
      
      public function solvent2(param1:MouseEvent) : void
      {
         graphToChose = 3;
         instruct.text = "Click on the solvent bottle to draw 1 ml of the solvent (methanol) and inject it into the sample inlet to clean any impurity in the sample pathway.";
         aspirine.visible = false;
         caffeine.visible = false;
      }
      
      function frame1() : *
      {
         graphToChose = 1;
         startGraph = 0;
         exp.gotoAndStop(1);
         fp.gotoAndStop(1);
         ep.gotoAndStop(1);
         fp.visible = false;
         ep.visible = false;
         insertsyringe.visible = false;
         insertsyringe.gotoAndStop(1);
         syringe1.gotoAndStop(1);
         shaker.visible = false;
         mixer.visible = false;
         syringe.visible = false;
         empty.visible = true;
         drops.visible = false;
         syringe1.visible = false;
         solvent.gotoAndStop(1);
         ms.gotoAndStop(1);
         exp.gotoAndStop(1);
         fs.visible = false;
         fs.gotoAndStop(1);
         es.visible = false;
         es.gotoAndStop(1);
         sequence = 0;
         btn0.addEventListener(MouseEvent.CLICK,cleaninst);
         syringe1.addEventListener(Event.ENTER_FRAME,insertclean);
         playtube = 0;
         insertsyringe.addEventListener(Event.ENTER_FRAME,startclean);
         btn1.addEventListener(MouseEvent.CLICK,fillpowder);
         fs.addEventListener(Event.ENTER_FRAME,fills);
         es.addEventListener(Event.ENTER_FRAME,emptys);
         btn2.addEventListener(MouseEvent.CLICK,fillsolvent);
         fp.addEventListener(Event.ENTER_FRAME,tillend);
         ep.addEventListener(Event.ENTER_FRAME,tillend2);
         btn3.addEventListener(MouseEvent.CLICK,shakebottle);
         btn4.addEventListener(MouseEvent.CLICK,usesyringe);
         syringe.addEventListener(Event.ENTER_FRAME,insertintru);
         insertsyringe.addEventListener(Event.ENTER_FRAME,startintru);
         expstarted = false;
         ms.addEventListener(Event.ENTER_FRAME,hidesyringe);
         exp.animation_4.red_line.addEventListener(Event.ENTER_FRAME,showgraph);
         drops.addEventListener(Event.ENTER_FRAME,hidebottle);
         Evaluate.addEventListener(MouseEvent.CLICK,gotoPage);
         aspirine.addEventListener(MouseEvent.CLICK,solvent1);
         caffeine.addEventListener(MouseEvent.CLICK,solvent2);
      }
   }
}
