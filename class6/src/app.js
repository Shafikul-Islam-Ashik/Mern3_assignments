// prompt for blood group input
let searchedInput =
  prompt(`Enter the blood group. (A+, A-, B+, B-, O+, O- ,AB+ ,AB-)
or,
Phone number. ex: 01777883355`);

// case insensative for searched result
if (searchedInput !== null) {
  searchedInput = searchedInput.toUpperCase();
}

// filter donors by search input (blood group)
const donorsByBloodGroup = bloodDonors.filter((donor) => {
  const { blood_group } = donor;
  return blood_group === searchedInput;
});

// find donor by search input (phone number)
const donorByPhone = bloodDonors.find((donor) => {
  return donor.cell === searchedInput;
});


// init, donors array based on criteria
const availableDonors = [];
const upcomingDonors = [];
const s_by_PhoneDonors = [];

// check donor searched by blood group is available or not
if (donorsByBloodGroup.length > 0) {
  /**********************
   *  filter available donors
   *************************/
  const av_donors = donorsByBloodGroup.filter((donor) => {
    return donor.last_donate > 120;
  });

  // maping
  av_donors.map((item) => {
    // push into availableDonors
    availableDonors.push(item);
  });

  // display available donors
  if (availableDonors.length > 0) {
    console.log("\n Available donors:");
    console.table(availableDonors, [
      "name",
      "age",
      "gender",
      "blood_group",
      "location",
      "cell",
    ]);
  } else {
    console.log("\n Available donors:");
    console.table("No available donor found");
  } // ends available donors functionality

  /**********************
   *   filter upcoming available donors
   *************************/

  const up_donors = donorsByBloodGroup.filter((donor) => {
    return donor.last_donate <= 120;
  });

  // maping
  up_donors
    .sort((a, b) => b.last_donate - a.last_donate) //sort by duration time for donation
    .map((donor) => {
      const { last_donate } = donor;
      // claculate duration time for donation
      let duration = 120 + 1 - last_donate;

      // update donor by adding duration
      donor = { ...donor, duration };

      // push into upcomingDonors
      upcomingDonors.push(donor);
    });

  // display upcoming donors
  if (upcomingDonors.length > 0) {
    console.log("\n Upcoming available donors:");

    console.table(upcomingDonors, [
      "name",
      "age",
      "gender",
      "blood_group",
      "location",
      "cell",
      "duration",
    ]);
  } else {
    console.log("\n Upcoming available donors:");
    console.table("No upcoming available donors found");
  } // ends upcoming donors functionality

  /**********************
   *   functionality for donors searched by phone number
   *************************/
} else if (donorByPhone) {
  //destructuring
  const { name, last_donate, donation } = donorByPhone;
  // claculate duration time for donation
  let duration = 120 + 1 - last_donate;
  let available;

  if (duration <= 0) {
    available = "Yes";
  } else {
    available = "No";
  }

  // create donor  by adding duration
  const donor = { ...donorByPhone, duration, available };

  // push donor into s_by_PhoneDonors
  s_by_PhoneDonors.push(donor);

  // display donors searched by phone number
  if (s_by_PhoneDonors.length > 0) {
    // check is donor Available for donation ?
    if (duration <= 0) {
      //available (not showing duration)
      console.log("\nDonor searched by phone number:");

      console.table(s_by_PhoneDonors, [
        "name",
        "age",
        "gender",
        "blood_group",
        "location",
        "cell",
        "available",
      ]);
    } else {
      // not available (showing duration)
      console.log("\nDonor searched by phone number:");

      console.table(s_by_PhoneDonors, [
        "name",
        "age",
        "gender",
        "blood_group",
        "location",
        "cell",
        "available",
        "duration",
      ]);
    }

    // display donation history
    if (donation.length > 0) {
      console.log(`\nDonation history of "${name}":`);
      console.table(donation);
    } else {
      console.log("\nNo donation history found");
    }
  } // ends display donors searched by phone number
} else {
  console.log("Invalid keyword");
} // ends checking searched donor
