using System;
using System.IO;
using System.Collections.Generic;
namespace Demo {
   class Program {
      static void Main(string[] args) {
         int[] arr = new int[3];
         arr[0] = 5;
         arr[1] = 7;
         arr[2] = 8;
         arr[4] = 24; // this shows an error
      }
   }
}
