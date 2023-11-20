// Progression 1 SmartPhone

class SmartPhone {
  constructor(ram, batteryPower, price) {
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }
  displayFeatures() {
    return this.ram + '\n' + this.batteryPower + '\n' + this.price;
  }
  remainingAmount(priceIHave) {
    this.price = this.price - priceIHave;
  }
}

// Progression 2 AndroidPhone

class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.modelName = modelName;
  }
}

// Progression 3 IPhone

class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.seriesName = seriesName;
  }
}

// Progression 4  Progression 1 MobileCampus

class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }
  changeMobileAvailabilityNumber(count, type) {
    if (type === 'android') {
      this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
      return 'Available android mobiles are ' + this.NoOfAndroidMobiles;
    }
    if (type === 'iphone') {
      this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
      return 'Available iphone mobiles are ' + this.NoOfIPhoneMobiles;
    }
  }
}
