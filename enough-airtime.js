function enoughAirtime(usage, airtime) {

  let total = 0
  const totalUsage = usage.split(",");

  for (let i = 0; i < totalUsage.length; i++) {
      const currentUsage = totalUsage[i].trim()
      if (currentUsage.startsWith('s')) {
          total += 0.75
      }

      else if (currentUsage.startsWith('d')) {
          total += 12
      }

      else if (currentUsage.startsWith('c')) { total += 1.88 }

      else {total += 0.00}
  }
  var result = airtime - total
  var diff = (total > airtime) ? "R0.00" : 'R' + result.toFixed(2)
   return diff
}