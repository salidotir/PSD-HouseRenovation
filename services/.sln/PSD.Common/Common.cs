
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace PSD.Common
{
    public static class Common
    {
        public static int GetRandomNumber()
        {
            Random random = new Random();
            return random.Next(0, 10000);
        }
        public static int GetRandomNumberMin(int min)
        {
            Random random = new Random();
            return random.Next(min, 10000);
        }
        public static int GetRandomNumberMax(int max)
        {
            Random random = new Random();
            return random.Next(0, max);
        }
        public static int GetRandomNumber(int min , int max)
        {
            Random random = new Random();
            return random.Next(min, max);
        }


        public static string ToJson<OBJECT>(this OBJECT instance)
            => JsonConvert.SerializeObject(instance);

        public static Object ToInstance<OBJECT>(this string json)
            => JsonConvert.DeserializeObject<OBJECT>(json);

    }
}
