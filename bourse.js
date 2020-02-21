//سرانه خرید حقیق
SaranehKharid=Math.round((((pc)*(ct).Buy_I_Volume)/(ct).Buy_CountI)/1000000)

//سرانه فروش حقیقی
SaranehForoush=Math.round((((pc)*(ct).Sell_I_Volume)/(ct).Sell_CountI)/1000000)

//نسبت خرید به فروش
KharidBeForoush=Math.round((a)/(b)*100)/100

//تعداد خریدارحقیقی
TedadKharidar=(ct).Buy_CountI

//تعداد فروشنده حقیقی
TedadForoushandeh=(ct).Sell_CountI

//نسبت حجم به حجم ده روز
NesbatVolume10=Math.round((tvol)/(([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J)/10)*100)/100

//RSI
true==function()
{

   var CalculateRSI =function(period){

      var len=20;

      for (var i = 0; i < len ; i++) {
         var rec=[ih][len-1-i];

         var change=rec.PClosing-rec.PriceYesterday;         

         if (change> 0) {
        rec.gain=change;
                rec.loss=0;
         }
         else
         {
        rec.gain=0;
                rec.loss=-change;
         }
      }

      // Calculate first "average gain" and "average loss"
      var gainSum=0;
      var lossSum=0;

      for (var i = 0; i < period; i++) {
         var rec=[ih][len-1-i];
     gainSum += rec.gain;
     lossSum += rec.loss;
      }

      var averageGain=gainSum /period;
      var averageLoss=lossSum / period;

      // Calculate subsequent "average gain" and "average loss" values
      for (var i = period + 1; i < len; i++) {
         var rec=[ih][len-1-i];

         averageGain=(averageGain* (period - 1) + rec.gain) / period;
         averageLoss=(averageLoss* (period - 1) + rec. loss)/  period;

         rec.averageGain=averageGain;
         rec.averageLoss=averageLoss;
      }

      // Calculate RSI
      var RS = 0; // Relative strength
      var RSIndex = 0; // Relative strength index
        
      for (var i = period + 1; i < len; i++) {
         var rec=[ih][len-1-i];

         RS = rec.averageGain/ rec.averageLoss;
     RSIndex = 100 - 100 / (1 + RS);
     rec.rsi=RSIndex;
      }
   };

      if(typeof [ih][0].rsi=="undefined")  
        CalculateRSI(14);
        return true;       

}()


