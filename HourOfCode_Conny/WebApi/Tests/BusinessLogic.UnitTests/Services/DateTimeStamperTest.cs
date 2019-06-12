using System;
using BusinessLogic.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BusinessLogic.UnitTests.Services
{
    [TestClass]
    public class DateTimeStamperTest
    {
        [TestMethod]
        public void GetTimeStamp_ReturnsDateTimeNow()
        {
            Assert.IsTrue(new DateTimeStamper().GetTimeStamp() > DateTime.Now.AddSeconds(-10.0));
        }
    }
}
