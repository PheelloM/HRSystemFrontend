
export class MyData{
details = new Details();
declarations =new Declarations();
homes =new Homes();
detailsCommissioner = new DetailsCommissioner();
additionalInfo = new AdditionalInfo();
declarationCommissioner = new DeclarationCommissioner();
}


export class Details{
      title: '';
      firstName: '';
      lastName: string;
      gender: '';
      //gender_other1: string;
      race: string;
      isSouthAfrican: boolean;
      idNumber: number;
      passportNumber: string;
      countryOfIssue: string;
      expiryDate: string;
      workPermit: boolean;
      workPermitDetails: string;
      disability: boolean;
      disabilityOther: string;
      email: string;
      contactNumber: number;
      altContactNumber: number;
      resAddress: string;
      postAddress: string;
      highestGradePassed: string;
      workExperience: string;
}

export class Declarations{
        question1: string;
        q1Comment: string;
        question2: string;
        q2Comment: string;
        question3: string;
        q3Comment: string;
        question4: string;
        q4Comment: string;
        question5: string;
        q5Comment: string;
        question6: string;
        q6Comment: string;
        question7: string;
        q7Comment: string;
        question8: string;
        q8Comment: string;
        question9: string;
        q9Comment: string;
        question10: string;
        q10Comment: string;
        question11: string;
        q11Comment: string;
        question12: string;
        q12Comment: string;
        question13: string;
        q13Comment: string;
        question14: string;
        q14Comment: string;
        question15: string;
        q15Comment: string;
        question16: string;
        q16Comment: string;
        question17: string;
        q17Comment: string;
}

export class Homes{
        referencenumber: string;
        }

export class DetailsCommissioner{
      title: '';
      firstName: '';
      lastName: string;
      gender: '';
      //gender_other1: string;
      race: string;
      isSouthAfrican: boolean;
      idNumber: number;
      passportNumber: string;
      countryOfIssue: string;
      expiryDate: string;
      workPermit: boolean;
      workPermitDetails: string;
      disability: boolean;
      disabilityOther: string;
      email: string;
      contactNumber: number;
      altContactNumber: number;
      resAddress: string;
      postAddress: string;
      highestGradePassed: string;
      workExperience: string;
      firstPref: string;
      secondPref: string;
      thirdPref: string;
      forthPref: string;
}

export class AdditionalInfo{
      jobTitle: '';
      external_Applicant: '';
      fulltimeRadios: '';
      defaultExampleRadiosfull_time: '';
      commissionerRadios2: '';
      mediation_and_ARBITRATION_Experience: string;
      industrial_RELATION_Experience: '';
      facilitation_TRAINING_Experience: string;
      management_LEADERSHIP_Experience: string;
      bargaining_Experience: string;
      name_of_bargaining: string;
}

export class DeclarationCommissioner{
        q1Radio: string;
        q1SARSNumberTxtBox: string;
        q2Radio: '';
        q3Radio: string;
        q4Radio: string;
        q5Radio: string;
        q6Radio: string;
        q7Radio: '';
        q8Radio: string;
        q9Radio: string;
        q10Radio: string;
        q9CommentTxtBox: string;
        q10CommentTxtBox: string;
}


