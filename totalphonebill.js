function costCalculator() {
    return {
      data: '',
      totalCost: '',
      
      calculateCost() {
        const calls = this.data.split(',').filter(item => item.trim() === 'call').length;
        const sms = this.data.split(',').filter(item => item.trim() === 'sms').length;
        const callCost = calls * 2.75;
        const smsCost = sms * 0.65;
        const totalCost = callCost + smsCost;
        this.totalCost = 'R' + totalCost.toFixed(2);
      }
    };
  }
