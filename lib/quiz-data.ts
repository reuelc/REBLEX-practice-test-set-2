import type { QuizPart } from "./types"

export const quizParts: QuizPart[] = [
  {
    id: "part1",
    title: "Part 1 - General Knowledge",
    questions: [
      {
        question: "How does Real Estate differ from Real Property?",
        options: [
          "A. Real Estate refers to only the land, while Real Property refers to the land and any improvements made to it.",
          "B. Real Estate is the same as Real Property, and there is no difference between the two.",
          "C. Real Estate refers to land and improvements, while Real Property includes land, improvements, and the rights and interests associated with the property as defined under the Civil Code.",
          "D. Real Property refers only to the land itself, while Real Estate includes the land, improvements, and the rights related to the property."
        ],
        correct: "C. Real Estate refers to land and improvements, while Real Property includes land, improvements, and the rights and interests associated with the property as defined under the Civil Code."
      },
      {
        question: "What is Property Ownership? The general classification of property under the Civil Code is that one is classified as movable property and the other is",
        options: [
          "a. Real property",
          "b. Personal property",
          "c. Immovable property",
          "d. Real estate"
        ],
        correct: "c. Immovable property"
      },
      {
        question: "What is the Regalian Doctrine?",
        options: [
          "A. It states that all private properties are owned by the government if they are not clearly registered.",
          "B. It asserts that all lands of the public domain belong to the State, and any rights to ownership of land must be asserted through the State.",
          "C. It provides that all lands in the country, whether public or private, are owned by the people.",
          "D. It grants private individuals full ownership of any land not clearly registered under the government's name."
        ],
        correct: "B. It asserts that all lands of the public domain belong to the State, and any rights to ownership of land must be asserted through the State."
      },
      {
        question: "Under the 1987 Phil. Constitution the government may transfer land to a Filipino Citizen by homestead provided the size does not exceed:",
        options: [
          "a. 1,000 square meters",
          "b. 12 hectares",
          "c. 3 hectares",
          "d. 1 hectare"
        ],
        correct: "b. 12 hectares"
      },
      {
        question: "How many years must a free patent applicant have possessed the land applied for to be eligible?",
        options: [
          "A. 5 years, as long as the applicant has resided and continuously possessed the land.",
          "B. 10 years, as long as the applicant or their predecessor-in-interest has resided and continuously possessed the land under a bona fide claim of ownership.",
          "C. 10 years, with no requirement for continuous possession.",
          "D. 20 years, as per the legal requirement for free patent application."
        ],
        correct: "B. 10 years, as long as the applicant or their predecessor-in-interest has resided and continuously possessed the land under a bona fide claim of ownership."
      },
      {
        question: "How can a foreigner like John own an improvement (house or building) and possess a parcel of land for long term in the Philippines?",
        options: [
          "A. By purchasing the land and registering it under his name.",
          "B. By entering into a lease agreement with a Filipino landowner for an initial period of 50 years, with an option to extend it for another 25 years, while owning the improvement.",
          "C. By acquiring full ownership of both the land and the improvement through a long-term foreign investment program.",
          "D. By entering into a partnership with a Filipino citizen and registering the land and the improvement in the Filipino partner's name."
        ],
        correct: "B. By entering into a lease agreement with a Filipino landowner for an initial period of 50 years, with an option to extend it for another 25 years, while owning the improvement."
      },
      {
        question: "The government may dispose or alienate lands of the public domain provided the classification is:",
        options: [
          "A. Residential",
          "B. Forest Land",
          "C. Commercial",
          "D. Agricultural"
        ],
        correct: "D. Agricultural"
      },
      {
        question: "What is the primary legal basis for property ownership in the Philippines?",
        options: [
          "A. Civil Code of the Philippines",
          "B. Property Law of the Philippines",
          "C. Philippine Constitution",
          "D. Republic Act No. 712"
        ],
        correct: "C. Philippine Constitution"
      },
      {
        question: "As a general rule, what type of property can foreign nationals own in the Philippines?",
        options: [
          "A. Land",
          "B. Condominium units (up to 40% of the total project area)",
          "C. Agricultural land",
          "D. Commercial real estate"
        ],
        correct: "B. Condominium units (up to 40% of the total project area)"
      },
      {
        question: "What is the Doctrine of Eminent Domain in property ownership?",
        options: [
          "A. The right of a person to own property",
          "B. The power of the state to expropriate private property for public use, with just compensation",
          "C. The rule that prevents foreigners from owning land",
          "D. The obligation to pay property taxes annually"
        ],
        correct: "B. The power of the state to expropriate private property for public use, with just compensation"
      },
      {
        question: "Who is allowed to own agricultural land in the Philippines?",
        options: [
          "A. Foreigners",
          "B. Filipino citizens and corporations with at least 60% Filipino ownership",
          "C. Any person, regardless of citizenship",
          "D. Only the government"
        ],
        correct: "B. Filipino citizens and corporations with at least 60% Filipino ownership"
      },
      {
        question: "Which of the following is a form of ownership that allows multiple individuals to own a property together?",
        options: [
          "A. Sole proprietorship",
          "B. Co-ownership",
          "C. Tenancy",
          "D. Leasing"
        ],
        correct: "B. Co-ownership"
      },
      {
        question: "Under Philippine law, what is the maximum area of land that a foreign corporation can own?",
        options: [
          "A. 40% of the total area of land",
          "B. 60% of the total area of land",
          "C. 100% of the land",
          "D. None"
        ],
        correct: "D. None"
      },
      {
        question: "What is usufruct in property ownership?",
        options: [
          "A. The right to use and enjoy the benefits of a property owned by another person, without transferring ownership",
          "B. The right to sell property",
          "C. The legal right to inherit a property",
          "D. The right to buy land from the government"
        ],
        correct: "A. The right to use and enjoy the benefits of a property owned by another person, without transferring ownership"
      },
      {
        question: "How long must an individual or entity possess a property in order to claim ownership through adverse possession if the individual does not have knowledge of any other claimants?",
        options: [
          "A. 1 year",
          "B. 5 years",
          "C. 10 years",
          "D. 30 years"
        ],
        correct: "C. 10 years"
      },
      {
        question: "What is the maximum area that may be granted under a Miscellaneous Sales Patent for residential purposes?",
        options: [
          "A. 500 square meters",
          "B. 1,000 square meters",
          "C. 1 hectare",
          "D. 10,000 square meters"
        ],
        correct: "B. 1,000 square meters"
      },
      {
        question: "Which of the following is NOT a characteristic of properties of public dominion?",
        options: [
          "A. It is beyond the commerce of man.",
          "B. It can be acquired through prescription.",
          "C. It cannot be registered under the Land Registration Law.",
          "D. It cannot be levied upon by execution or attached."
        ],
        correct: "B. It can be acquired through prescription."
      },
      {
        question: "According to the 1987 Philippine Constitution, who is entitled to own land in the Philippines?",
        options: [
          "A. Only Filipino citizens",
          "B. Filipino citizens and corporations with at least 40% of their shares owned by Filipinos",
          "C. Filipino citizens and corporations with at least 60% of their shares owned by Filipinos",
          "D. Any foreigner who has lived in the Philippines for more than 10 years"
        ],
        correct: "C. Filipino citizens and corporations with at least 60% of their shares owned by Filipinos"
      },
      {
        question: "What must a former natural-born Filipino do to be allowed to retain their land ownership privileges?",
        options: [
          "A. Apply for citizenship in the country of residence",
          "B. Apply for Dual Citizenship under RA 9225",
          "C. Acquire a permit from the Department of Foreign Affairs",
          "D. Renounce foreign citizenship and reapply for Filipino citizenship"
        ],
        correct: "B. Apply for Dual Citizenship under RA 9225"
      },
      {
        question: "Which of the following is an example of an involuntary alienation of land?",
        options: [
          "A. A deed of sale between two private parties",
          "B. A donation made during the lifetime of the owner",
          "C. Expropriation proceeding for public use",
          "D. A lease agreement between a Filipino landowner and a foreigner"
        ],
        correct: "C. Expropriation proceeding for public use"
      },
      {
        question: "Mr. Martin Romwaldez inherited a piece of land when he was still single. Then he got married on October 28, 2021 without a marriage settlement. What is the nature of the property now that he is married?",
        options: [
          "A. Exclusive Property",
          "B. Separate Property",
          "C. Uncommon Property",
          "D. Community Property"
        ],
        correct: "A. Exclusive Property"
      },
      {
        question: "5 years after they got married, the parents of Mr. X died, hence, the latter acquired a 10-hectare farm thereto. He was able to process the title of the farm and named it as 'MR. X married to MS. Y'. The farm is considered as",
        options: [
          "a. Forming part of the absolute community",
          "b. Forming part of the conjugal partnership of gains",
          "c. A paraphernal property",
          "d. Capital property",
          "e. None of the above"
        ],
        correct: "d. Capital property"
      },
      {
        question: "Ms. Inday Zara inherited a piece of land when she was still single. Then she got married on October 28, 1985 without a marriage settlement. What is the nature of the property now that she is married?",
        options: [
          "A. Exclusive Property",
          "B. Conjugal Property",
          "C. Uncommon Property",
          "D. Community Property"
        ],
        correct: "A. Exclusive Property"
      },
      {
        question: "Mr. Lazaro decided that the lessee shall deposit the rental fees to his personal account as stated in the newly executed lease contract tho which his wife opposed. The wife may question the said decision provided she does so within a period of how many years from the date of the contract implementing the said lease?",
        options: [
          "a. 1 year",
          "b. 2 years",
          "c. 5 years",
          "d. 10 years",
          "e. None of the above"
        ],
        correct: "c. 5 years"
      },
      {
        question: "The wife may question the sale of the house and lot if it is required that her consent be obtained within a period of how many years from the date of the contract?",
        options: [
          "A. 10 years",
          "B. 5 years",
          "C. 2 years",
          "D. 1 year"
        ],
        correct: "A. 10 years"
      },
      {
        question: "Clark Justine and Princess Jade were both 18 years old but decided not to get married yet and just lived as common law spouses. Their property relations shall be:",
        options: [
          "a. Conjugal property",
          "b. Co-ownership",
          "c. Community property",
          "d. Sole property of each other",
          "e. None of the above"
        ],
        correct: "b. Co-ownership"
      },
      {
        question: "Under the Family Code of the Philippines, what is the default property regime for marriages celebrated without a marriage settlement?",
        options: [
          "A. Conjugal partnership of gains",
          "B. Absolute community of property",
          "C. Separation of property",
          "D. Community property with restrictions"
        ],
        correct: "B. Absolute community of property"
      },
      {
        question: "Under the absolute community of property regime, which of the following is considered part of the community property?",
        options: [
          "A. Property acquired before marriage only",
          "B. Property acquired during marriage by gratuitous title",
          "C. Property inherited by either spouse during the marriage",
          "D. Property acquired before and during marriage by either spouse"
        ],
        correct: "D. Property acquired before and during marriage by either spouse"
      },
      {
        question: "In a marriage under the conjugal partnership of gains regime, which of the following is considered the exclusive property of the husband or wife?",
        options: [
          "A. Property acquired during the marriage",
          "B. Property inherited by either spouse",
          "C. Property acquired by virtue of their earnings",
          "D. Property purchased with joint earnings"
        ],
        correct: "B. Property inherited by either spouse"
      },
      {
        question: "Which of the following is considered exclusive property under the conjugal partnership of gains?",
        options: [
          "A. Property acquired by the husband or wife before the marriage",
          "B. Property acquired through the efforts of both spouses during marriage",
          "C. Property acquired by both spouses during the marriage",
          "D. All of the above"
        ],
        correct: "A. Property acquired by the husband or wife before the marriage"
      },
      {
        question: "What happens to the conjugal property in case of dissolution of the marriage under the Family Code?",
        options: [
          "A. The property remains with the spouse who owns it",
          "B. The property is equally divided between the spouses",
          "C. The property is given to the spouse who contributed more to the household",
          "D. The property is given to the children"
        ],
        correct: "B. The property is equally divided between the spouses"
      },
      {
        question: "If a spouse disposes of property without the consent of the other spouse in an absolute community regime, what is the consequence?",
        options: [
          "A. The contract is void",
          "B. The contract is voidable",
          "C. The contract is valid but subject to division",
          "D. The spouse who disposes of the property is penalized"
        ],
        correct: "A. The contract is void"
      },
      {
        question: "Under the Family Code, who has the right to administer the common property in the absolute community of property regime?",
        options: [
          "A. Both spouses",
          "B. The husband",
          "C. The wife",
          "D. The children"
        ],
        correct: "A. Both spouses"
      },
      {
        question: "What happens to the exclusive property of a spouse under the Family Code when the couple separates or divorces?",
        options: [
          "A. It remains with the spouse who owned it",
          "B. It is divided equally between the spouses",
          "C. It is treated as community property",
          "D. It goes to the children"
        ],
        correct: "A. It remains with the spouse who owned it"
      },
      {
        question: "What is the term used to describe the property regime where all property, whether acquired before or during marriage, is jointly owned by the spouses?",
        options: [
          "A. Conjugal partnership of gains",
          "B. Absolute community of property",
          "C. Separation of property",
          "D. Partition of property"
        ],
        correct: "B. Absolute community of property"
      },
      {
        question: "Lisa married Lito in 2015. They acquired a 5 hectare farm. They have 2 children. Lito died without a will. How much will be the share of Lisa to the said farm?",
        options: [
          "a. 5 hectare",
          "b. 3.33 has",
          "c. 2.5 has",
          "d. None of the above"
        ],
        correct: "b. 3.33 has"
      },
      {
        question: "Lina and Lino got married in 2009. They have 2 children. They acquired a 2,000 sqm property after they got married. Before Lino died, he executed a will wherein his share of 1,000 sqm portion to the said property was donated to his brother. Lino died. When the heirs sold the property for PHP10,000,000.00 after they have settled the estate of Lino, how much will be the share of his brother?",
        options: [
          "a. PHP5,000,000.00",
          "b. PHP2,500,000.00",
          "c. PHP1,250,000.00",
          "d. PHP3,000,000.00"
        ],
        correct: "c. PHP1,250,000.00"
      },
      {
        question: "Which of the following is NOT a type of succession under Philippine law?",
        options: [
          "a. Testate succession",
          "b. Intestate succession",
          "c. Conditional succession",
          "d. Legal succession"
        ],
        correct: "c. Conditional succession"
      },
      {
        question: "In the case of intestate succession, how is the estate of the deceased distributed?",
        options: [
          "a. According to the will",
          "b. According to the laws of inheritance",
          "c. According to the estate's value",
          "d. Equally to the heirs of the deceased"
        ],
        correct: "b. According to the laws of inheritance"
      },
      {
        question: "What is the term used for the person who inherits real property under a will?",
        options: [
          "a. Testator",
          "b. Legatee",
          "c. Heir",
          "d. Executor"
        ],
        correct: "b. Legatee"
      },
      {
        question: "If a person dies without leaving a will, what type of succession applies?",
        options: [
          "a. Testate succession",
          "b. Intestate succession",
          "c. Legal succession",
          "d. Forced succession"
        ],
        correct: "b. Intestate succession"
      },
      {
        question: "Who are considered the compulsory heirs in the Philippines?",
        options: [
          "a. Spouse and children",
          "b. Parents and siblings",
          "c. Only children",
          "d. Only the surviving spouse"
        ],
        correct: "a. Spouse and children"
      },
      {
        question: "In the absence of a will, who will inherit the real property of a decedent first?",
        options: [
          "a. Parents",
          "b. Siblings",
          "c. Spouse and children",
          "d. Grandparents"
        ],
        correct: "c. Spouse and children"
      },
      {
        question: "What is the role of an executor in a testate succession?",
        options: [
          "a. To divide the estate",
          "b. To distribute the property according to the law",
          "c. To pay the deceased's debts",
          "d. To administer and distribute the estate as per the will"
        ],
        correct: "d. To administer and distribute the estate as per the will"
      },
      {
        question: "If a person dies without heirs and without a will, who will inherit the real property?",
        options: [
          "a. The government",
          "b. The spouse",
          "c. The testator's parents",
          "d. The state under escheat"
        ],
        correct: "d. The state under escheat"
      },
      {
        question: "How is real estate treated when there are several heirs?",
        options: [
          "a. It must be sold and divided equally",
          "b. It may be divided based on the individual will of each heir",
          "c. It is subject to partition and distribution",
          "d. It remains with the surviving spouse"
        ],
        correct: "c. It is subject to partition and distribution"
      },
      {
        question: "When a decedent leaves a will but fails to appoint an executor, who assumes the role of executor?",
        options: [
          "a. The surviving spouse",
          "b. A court-appointed administrator",
          "c. The eldest child",
          "d. The primary heir"
        ],
        correct: "b. A court-appointed administrator"
      },
      {
        question: "What type of property can be inherited through the law of succession?",
        options: [
          "a. Real property only",
          "b. Personal property only",
          "c. Both real and personal property",
          "d. Only movable property"
        ],
        correct: "c. Both real and personal property"
      },
      {
        question: "What is the effect of a 'no contest' clause in a will under Philippine law?",
        options: [
          "a. It nullifies the will",
          "b. It disinherits all heirs",
          "c. It prevents heirs from contesting the will",
          "d. It has no legal effect"
        ],
        correct: "c. It prevents heirs from contesting the will"
      },
      {
        question: "Who has the right to contest a will in the Philippines?",
        options: [
          "a. Only the surviving spouse",
          "b. Only the children",
          "c. Only the heirs who are directly affected by the will",
          "d. Anyone who can prove the will is invalid"
        ],
        correct: "c. Only the heirs who are directly affected by the will"
      },
      {
        question: "What happens if a decedent's real property is encumbered with a mortgage at the time of death?",
        options: [
          "a. The real property is immediately repossessed",
          "b. The heirs inherit the property subject to the mortgage",
          "c. The mortgage is nullified",
          "d. The property is not inherited"
        ],
        correct: "b. The heirs inherit the property subject to the mortgage"
      },
      {
        question: "What is the role of a notary public in relation to the Philippine law on succession?",
        options: [
          "a. To manage the estate",
          "b. To draft a will that is legally binding",
          "c. To distribute the property among heirs",
          "d. To serve as the executor of the estate"
        ],
        correct: "b. To draft a will that is legally binding"
      },
      {
        question: "If a decedent leaves behind a house and lot but no will, who is entitled to inherit the real property?",
        options: [
          "a. The local government",
          "b. The surviving spouse and children",
          "c. The children only",
          "d. The surviving spouse only"
        ],
        correct: "b. The surviving spouse and children"
      },
      {
        question: "Which of the following is NOT a requirement for a valid extrajudicial settlement of estate?",
        options: [
          "A. The decedent must have no outstanding debts, or all debts must have been settled.",
          "B. The heirs must all be of legal age, or represented by judicial guardians if minors.",
          "C. The decedent must have executed a valid will outlining the distribution of assets.",
          "D. The settlement must be done through a written Extrajudicial Settlement of Estate."
        ],
        correct: "C. The decedent must have executed a valid will outlining the distribution of assets."
      },
      {
        question: "Lisa married Lito in 2015. They acquired a 10-hectare farm. They have two children. Lito died without a will. How much will be Lisa's share in the farm?",
        options: [
          "A. 5 hectares",
          "B. 6.66 hectares",
          "C. 2.5 hectares",
          "D. None of the above"
        ],
        correct: "B. 6.66 hectares"
      },
      {
        question: "The following considered unethical for the real estate broker to do when selling a house and lot",
        options: [
          "A. To have the house cleaned before bringing the buyer",
          "B. To tell the buyer there are many buyers interested although there are only few interested buyers",
          "C. To open the windows of the house before bringing the buyer",
          "D. To pass through a better road instead of the road with squatters"
        ],
        correct: "B. To tell the buyer there are many buyers interested although there are only few interested buyers"
      },
      {
        question: "Which of the following acts can be considered to be unethical for a real estate broker?",
        options: [
          "A. The broker should cooperate with other brokers on property listed",
          "B. The broker should share the commission on an agreed basis",
          "C. The broker should seek no unfair advantage over his fellow brokers",
          "D. The brokers can use the services of the salesman of another broker provided he pays the salesperson a commission"
        ],
        correct: "D. The brokers can use the services of the salesman of another broker provided he pays the salesperson a commission"
      },
      {
        question: "If a broker is a member of an organization, the real estate broker should not engage in the following",
        options: [
          "A. Be an officer and serve if elected",
          "B. Electioneering during the annual elections",
          "C. Support the programs or the organization",
          "D. Pay on time the dues of the organization"
        ],
        correct: "B. Electioneering during the annual elections"
      },
      {
        question: "For violation of the code of ethics, the following penalty may be imposed by the broker's professional real estate organization",
        options: [
          "A. Removal of license",
          "B. Suspension of license",
          "C. Removal from roster of registered real estate brokers",
          "D. Expulsion from the organization"
        ],
        correct: "D. Expulsion from the organization"
      },
      {
        question: "A real estate broker receives a commission from the seller of a property. The buyer later offers the broker an additional commission for their services in securing the property. What must the broker do to ensure the transaction remains ethical?",
        options: [
          "a. Accept the commission from the buyer, as long as the broker declares it to the seller afterward",
          "b. Accept the commission from the buyer only if both the seller and the buyer have been informed and give consent",
          "c. Refuse the commission from the buyer, as accepting multiple commissions violates fiduciary duty",
          "d. Accept the commission from the buyer without informing the seller, as the broker is entitled to multiple commissions"
        ],
        correct: "b. Accept the commission from the buyer only if both the seller and the buyer have been informed and give consent"
      },
      {
        question: "A real estate broker is selling a property for a client and knows that the property is in a flood-prone area, but the seller has not disclosed this information. What is the real estate broker's responsibility?",
        options: [
          "a. Inform the buyer of the flood-prone risk, even if the seller does not disclose it",
          "b. Hide the information and let the buyer discover it after the transaction",
          "c. Allow the seller to decide what to disclose, as the agent's role is limited to the sale",
          "d. Only inform the buyer if they directly ask about the flood risk"
        ],
        correct: "a. Inform the buyer of the flood-prone risk, even if the seller does not disclose it"
      },
      {
        question: "A real estate salesperson, while conducting a property showing, unintentionally discloses the private financial situation of a client to a third party. What should the salesperson do next?",
        options: [
          "a. Give gifts to the client to bribe him",
          "b. Ignore the situation as it was a simple mistake and doesn't need any further action",
          "c. Report the disclosure to the client and take responsibility for the breach of confidentiality",
          "d. Immediately stop working with that client to avoid future issues"
        ],
        correct: "c. Report the disclosure to the client and take responsibility for the breach of confidentiality"
      },
      {
        question: "A real estate broker finds that another broker is consistently violating the Code of Ethics and Responsibilities by making false property representations. The first broker decides not to report this behavior. What are the possible consequences of the first broker's decision?",
        options: [
          "a. The first broker will be rewarded for staying out of conflict",
          "b. The first broker could be held liable for failing to report unethical conduct",
          "c. The first broker will not face any consequences as they are not directly involved",
          "d. The first broker's decision is irrelevant and has no impact"
        ],
        correct: "b. The first broker could be held liable for failing to report unethical conduct"
      },
      {
        question: "Julio, a real estate broker and appraiser is hired by a property owner to appraise a piece of land, but Julio is also considering buying the property. What should Julio do in this situation?",
        options: [
          "a. Proceed with the appraisal, as they can separate personal interests from professional duties",
          "b. Refuse to conduct the appraisal due to a potential conflict of interest",
          "c. Conduct the appraisal and disclose to the property owner that he is considering purchasing it",
          "d. Proceed with the appraisal but charge a higher fee because of their personal interest in the property"
        ],
        correct: "b. Refuse to conduct the appraisal due to a potential conflict of interest"
      },
      {
        question: "A real estate broker learns that their client has been involved in illegal activities related to the property they are trying to sell. What is the ethical action for the broker to take?",
        options: [
          "a. Keep the information confidential and proceed with the sale as usual",
          "b. Inform the client that they cannot work with them anymore but still complete the transaction",
          "c. Report the situation to the proper authorities, even if it risks the broker's business relationship",
          "d. Continue working with the client while ignoring the illegal activities, as it's not the broker's responsibility"
        ],
        correct: "c. Report the situation to the proper authorities, even if it risks the broker's business relationship"
      },
      {
        question: "A real estate broker discovers that another broker has made an error in the property listing, leading to a significant misrepresentation of the property's size. What is the broker's responsibility in this situation?",
        options: [
          "a. Notify the other broker and suggest they fix the error privately without involving others",
          "b. Report the error to the client and authorities to prevent future issues",
          "c. Ignore the situation, as it is not the broker's responsibility",
          "d. Try to benefit from the error by exploiting the misinformation in their own transactions"
        ],
        correct: "b. Report the error to the client and authorities to prevent future issues"
      },
      {
        question: "A real estate broker receives a referral fee from a third-party contractor for recommending their services to a client. The broker fails to inform their client about this referral fee. What ethical violation has occurred?",
        options: [
          "a. There is no violation as referral fees are common in the industry",
          "b. The salesperson violated the principle of transparency and fiduciary responsibility",
          "c. The salesperson is only required to disclose the fee if the client asks about it",
          "d. The salesperson should have kept the referral fee a secret to maintain business relationships"
        ],
        correct: "b. The salesperson violated the principle of transparency and fiduciary responsibility"
      },
      {
        question: "What is the fiduciary duty of a real estate practitioner regarding loyalty?",
        options: [
          "a. To prioritize the client's interests over others",
          "b. To prioritize their own financial gain over the client's interests",
          "c. To ignore conflicts of interest",
          "d. To only work with the highest-paying clients"
        ],
        correct: "a. To prioritize the client's interests over others"
      },
      {
        question: "Which of the following actions would violate the fiduciary duty of a real estate service practitioner?",
        options: [
          "A. The practitioner prioritizes the client's interest above their own in all transactions.",
          "B. The practitioner accepts a commission from the buyer after receiving one from the seller, but discloses this to both parties and obtains their consent.",
          "C. The practitioner fails to fully disclose a material fact about the property to the buyer, thereby benefiting the seller.",
          "D. The practitioner exercises reasonable care and diligence in protecting the client's interests, even in complex deals."
        ],
        correct: "C. The practitioner fails to fully disclose a material fact about the property to the buyer, thereby benefiting the seller."
      },
      {
        question: "Which of the following is considered unethical conduct for a real estate service practitioner in relation to their fellow practitioners?",
        options: [
          "A. A practitioner cooperates with another broker to share commission as agreed upon.",
          "B. A practitioner uses another broker's vital documents without the latter's written consent.",
          "C. A practitioner seeks no unfair advantage over another broker.",
          "D. A practitioner coordinates professional fees with fellow practitioners according to the tariff set by the Accredited and Integrated Professional Organization (AIPO)."
        ],
        correct: "B. A practitioner uses another broker's vital documents without the latter's written consent."
      },
      {
        question: "Which of the following is NOT one of the powers and functions of the PRBRES, as stated in the Real Estate Service Act?",
        options: [
          "A. Prescribe the curricula and facilities for schools offering real estate service courses.",
          "B. Conduct licensure examinations for real estate service professionals.",
          "C. Develop and enforce laws related to real estate ownership.",
          "D. Issue, suspend, revoke, or reinstate certificates of registration for real estate service practitioners."
        ],
        correct: "C. Develop and enforce laws related to real estate ownership."
      },
      {
        question: "Which of the following is NOT a responsibility of the PRBRES under the Real Estate Service Act?",
        options: [
          "A. Safeguard legitimate licensed real estate service practitioners by monitoring advertisements and unlicensed practices.",
          "B. Approve and monitor real estate development projects within the Philippines.",
          "C. Issue subpoenas and investigate violations related to the Real Estate Service Act.",
          "D. Evaluate and recommend measures to upgrade the standards of real estate service education."
        ],
        correct: "B. Approve and monitor real estate development projects within the Philippines."
      },
      {
        question: "Which of the following is NOT a power granted to the PRBRES by the Real Estate Service Act?",
        options: [
          "A. Administer oaths and affirmations related to real estate service professionals.",
          "B. Prescribe regulatory fees for the real estate service profession.",
          "C. Regulate the prices of real estate properties in the Philippines.",
          "D. Coordinate with the Commission on Higher Education (CHED) to prescribe curricula for real estate service courses."
        ],
        correct: "C. Regulate the prices of real estate properties in the Philippines."
      },
      {
        question: "Which of the following is NOT a qualification required for the Chairperson and Members of the PRBRES?",
        options: [
          "A. A citizen and resident of the Philippines.",
          "B. A holder of a bachelor's degree related to real estate.",
          "C. A member of the faculty of an institute offering review classes for licensure exams.",
          "D. An active licensed practitioner of real estate service for at least ten (10) years prior to their appointment."
        ],
        correct: "C. A member of the faculty of an institute offering review classes for licensure exams."
      },
      {
        question: "Which of the following is NOT a requirement for the Chairperson and Members of the PRBRES under the qualifications for appointment?",
        options: [
          "A. The individual must be a bona fide member in good standing of an accredited professional organization.",
          "B. The individual must have held a position as an officer or trustee of the accredited professional organization.",
          "C. The individual must not have been convicted of any criminal offense involving moral turpitude.",
          "D. The individual must have a bachelor's degree related to real estate."
        ],
        correct: "B. The individual must have held a position as an officer or trustee of the accredited professional organization."
      },
      {
        question: "Which of the following is NOT included in the scope of the licensure examination for real estate brokers as per the required subjects?",
        options: [
          "A. Fundamentals of property ownership",
          "B. Code of ethics and responsibilities",
          "C. Legal requirements for real estate service practice",
          "D. Real estate business management and entrepreneurship"
        ],
        correct: "D. Real estate business management and entrepreneurship"
      },
      {
        question: "What is the minimum average percentage a candidate must obtain to successfully pass the licensure examination for real estate practitioners?",
        options: [
          "A. 70% with no grade below 75% for each subject",
          "B. 75% with no grade below 50% for each subject",
          "C. 80% with no grade below 75% for each subject",
          "D. 85% with no grade below 50% for each subject"
        ],
        correct: "B. 75% with no grade below 50% for each subject"
      },
      {
        question: "Which of the following actions can lead to the revocation or suspension of a real estate service practitioner's certificate of registration or professional identification card?",
        options: [
          "A. Failure to file taxes on time",
          "B. Procurement of a certificate of registration by fraud or deceit",
          "C. Failure to submit Continuing Professional Development (CPD) units",
          "D. Delaying the payment of professional fees"
        ],
        correct: "B. Procurement of a certificate of registration by fraud or deceit"
      },
      {
        question: "Which of the following is NOT a reason for the revocation or suspension of a real estate service practitioner's certificate of registration or professional identification card, according to the Board?",
        options: [
          "A. Allowing an unqualified person to practice under one's name",
          "B. Engaging in unprofessional or unethical conduct",
          "C. Failure to attend an accredited seminar",
          "D. Practicing the profession while under suspension"
        ],
        correct: "C. Failure to attend an accredited seminar"
      },
      {
        question: "If a real estate service practitioner is found to have engaged in malpractice, which of the following actions may the Board take?",
        options: [
          "A. Issue a warning and fine the practitioner",
          "B. Only suspend the practitioner's license for a specific time period",
          "C. Revoke the certificate of registration and professional identification card",
          "D. Cancel the practitioner's right to renew their license"
        ],
        correct: "C. Revoke the certificate of registration and professional identification card"
      },
      {
        question: "Under the principle of foreign reciprocity, which of the following must be true for a foreign real estate service practitioner to be admitted to the licensure examination or be granted a certificate of registration in the Philippines?",
        options: [
          "A. The foreign practitioner must have a valid work visa in the Philippines.",
          "B. The foreign practitioner's country must allow Filipino real estate practitioners to practice on equal terms.",
          "C. The foreign practitioner must have at least 10 years of experience in real estate.",
          "D. The foreign practitioner must have completed an accredited real estate program in the Philippines."
        ],
        correct: "B. The foreign practitioner's country must allow Filipino real estate practitioners to practice on equal terms."
      },
      {
        question: "Which of the following individuals or entities is exempt from the provisions of the Real Estate Service Act in relation to the practice of real estate service?",
        options: [
          "A. A real estate broker leasing a condominium unit for a month of rent as payment properties for commission.",
          "B. A person performing real estate acts on their own property",
          "C. A real estate broker selling properties for commission.",
          "D. A licensed real estate appraiser conducting property assessments for a fee."
        ],
        correct: "B. A person performing real estate acts on their own property"
      },
      {
        question: "Which of the following is not exempt from the provisions of the Real Estate Service Act?",
        options: [
          "A. A trustee in bankruptcy proceedings.",
          "B. A public officer performing official duties, except government assessors.",
          "C. A duly constituted attorney-in-fact handling a property transaction for someone else without compensation.",
          "D. A real estate salesperson handling their own property for sale without compensation."
        ],
        correct: "D. A real estate salesperson handling their own property for sale without compensation."
      },
      {
        question: "Which of the following is true regarding the responsibilities of a real estate broker towards their salespersons under the supervision guidelines?",
        options: [
          "A. A real estate broker is only required to supervise their salespersons when they are working with high-value properties.",
          "B. A real estate salesperson can independently sign contracts on behalf of clients without the broker's involvement.",
          "C. The real estate broker must sign the agreements alongside their salesperson for the agreement to be valid.",
          "D. A real estate salesperson does not need to be accredited by the Board if they are employed by a registered broker."
        ],
        correct: "C. The real estate broker must sign the agreements alongside their salesperson for the agreement to be valid."
      },
      {
        question: "John, a real estate salesperson, has completed two years of college education and attended the required training seminars in real estate brokerage. He has been working under the supervision of a licensed real estate broker, Sarah. One day, John negotiates a real estate deal with a client and directly mediates a contract between the client and the seller. However, John does not have his accreditation from the PRBRES. What violation has John committed in this scenario?",
        options: [
          "A. He can negotiate real estate transactions because he attended the required training.",
          "B. John committed a violation because he negotiated and mediated the transaction without accreditation from the PRBRES.",
          "C. John did not commit any violation as he was working under the supervision of Sarah.",
          "D. John violated the law because he did not complete the two years of college education."
        ],
        correct: "B. John committed a violation because he negotiated and mediated the transaction without accreditation from the PRBRES."
      },
      {
        question: "Lucy, a real estate broker, hires Peter as a real estate salesperson to assist her in transactions. Peter is not yet accredited by the PRBES but begins working on several property deals. Lucy fails to secure Peter's accreditation from the PRBRES before having him work with clients. After a few months, the Board inspects Lucy's real estate practice and discovers Peter's lack of accreditation. Which of the following is true regarding Lucy's actions?",
        options: [
          "A. Lucy is not responsible because Peter should have obtained his own accreditation before working.",
          "B. Lucy violated the RESA by employing Peter without securing his accreditation from the PRBRES",
          "C. Lucy's actions are acceptable as long as Peter has completed the necessary training.",
          "D. Lucy is responsible only if Peter engages in fraudulent practices."
        ],
        correct: "B. Lucy violated the RESA by employing Peter without securing his accreditation from the PRBRES"
      },
      {
        question: "Which of the following statements is true regarding the compensation of real estate salespersons?",
        options: [
          "A. A real estate salesperson can receive a commission from any party involved in the real estate transaction, provided the agreement is signed by all parties.",
          "B. A real estate salesperson can only receive a fee or commission from the licensed real estate broker who has direct supervision over them.",
          "C. A real estate salesperson can negotiate fees directly with clients, even without the broker's consent, as long as the transaction is finalized.",
          "D. A real estate salesperson can receive compensation from both the broker and the client if both parties agree."
        ],
        correct: "B. A real estate salesperson can only receive a fee or commission from the licensed real estate broker who has direct supervision over them."
      },
      {
        question: "ABC Realty, a real estate development company, wants to expand its operations and open multiple branch offices across the country. To comply with the regulations set by the Real Estate Service Act, the company plans to hire licensed real estate brokers, appraisers, and consultants to manage its branches. The company has already registered with the Securities and Exchange Commission (SEC) and wants to ensure compliance with the required standards. Which of the following is a requirement for ABC Realty to legally operate its branch offices?",
        options: [
          "A. The branch offices must have a licensed real estate broker, appraiser, or consultant to supervise the office's operations.",
          "B. The branch offices must be managed by the head of the marketing department, who does not need to be a licensed real estate professional.",
          "C. The company only needs to submit its real estate practitioners' list once during its initial registration with SEC.",
          "D. Each branch office must have at least one accredited salesperson for every licensed real estate broker."
        ],
        correct: "A. The branch offices must have a licensed real estate broker, appraiser, or consultant to supervise the office's operations."
      },
      {
        question: "XYZ Properties, a real estate firm, has recently registered as a corporation with the SEC. The company has 50 accredited salespersons, and they are planning to expand further into the real estate market. The firm also plans to hire several new licensed real estate brokers and consultants. However, they are unsure about how many brokers they are required to employ in relation to the salespersons. How many licensed real estate brokers must XYZ Properties employ to comply with the regulations?",
        options: [
          "A. At least three licensed real estate brokers",
          "B. At least one licensed real estate broker",
          "C. At least five licensed real estate brokers",
          "D. No specific requirement is stated for the number of brokers to salespersons."
        ],
        correct: "A. At least three licensed real estate brokers"
      },
      {
        question: "Which of the following is NOT a requirement for real estate service practitioners when signing, using, or issuing documents related to their profession?",
        options: [
          "A. Indicating the certificate of registration number",
          "B. Indicating the professional identification card number",
          "C. Indicating the tax identification number (TIN)",
          "D. Indicating the Accredited Professional Organization (APO) number"
        ],
        correct: "C. Indicating the tax identification number (TIN)"
      },
      {
        question: "Liza, a real estate broker, is working with a real estate developer to sell newly developed properties. Liza's sales department is managed by a senior salesperson who is not accredited by the PRBRES. What responsibility does Liza have according to the Real Estate Service Act in this situation?",
        options: [
          "A. Liza is not responsible because the unaccredited salesperson is part of the sales department.",
          "B. Liza should ensure that the salesperson is accredited before managing any real estate transactions.",
          "C. Liza is only responsible for her own actions and not for the qualifications of her team.",
          "D. Liza is not liable as long as the salesperson completes the required training after the fact."
        ],
        correct: "B. Liza should ensure that the salesperson is accredited before managing any real estate transactions."
      },
      {
        question: "John, a licensed real estate broker, hires a real estate salesperson named Maria to assist him with property transactions. Maria has not yet completed the required accreditation with the Board of Real Estate Service but has been involved in negotiating a real estate sale without John's direct supervision. What is the most likely consequence for John in this scenario?",
        options: [
          "A. John will be given a warning and required to supervise Maria in the future.",
          "B. John will be guilty of violating the Act for employing an unaccredited salesperson.",
          "C. John's license will be automatically revoked due to Maria's lack of accreditation.",
          "D. John will not face any penalties since Maria did not violate any laws."
        ],
        correct: "B. John will be guilty of violating the Act for employing an unaccredited salesperson."
      },
      {
        question: "Sophia is a licensed real estate broker who oversees a real estate office. She recently hired several salespersons, but one of them, Mark, has been repeatedly engaging in real estate transactions without securing accreditation from the Board. Sophia was aware of this but did not intervene. What legal consequence is most likely to occur for Sophia under the Real Estate Service Act?",
        options: [
          "A. Sophia will be penalized with a fine of PHP2,000,000.00 for employing an unaccredited salesperson.",
          "B. Sophia will be required to submit a report to the Board for the unaccredited salesperson.",
          "C. Sophia will face suspension or revocation of license for employing an unaccredited salesperson and failing to supervise Mark.",
          "D. Sophia will be absolved of any responsibility, as Mark is individually accountable for his actions."
        ],
        correct: "C. Sophia will face suspension or revocation of license for employing an unaccredited salesperson and failing to supervise Mark."
      },
      {
        question: "What does the color Gold represent in the context of Real Estate Professionals' pin colors?",
        options: [
          "A. Real Estate Consultant",
          "B. Real Estate Appraiser",
          "C. Old and New PRBRES members",
          "D. Real Estate Broker"
        ],
        correct: "C. Old and New PRBRES members"
      },
      {
        question: "Which of the following represents improvements on land, such as residential, industrial, commercial, and institutional buildings?",
        options: [
          "A. Trees and the fruits",
          "B. Green lines",
          "C. Structures",
          "D. Rising Sun"
        ],
        correct: "C. Structures"
      },
      {
        question: "In the context of Philippine real estate, what does the Sun and Rays symbolize?",
        options: [
          "A. Environment and ecology",
          "B. Life and light",
          "C. Ethical standards and prosperity",
          "D. Vital role in economic development"
        ],
        correct: "B. Life and light"
      },
      {
        question: "Which of the following colors represents the real estate service practitioners such as real estate consultants, appraisers, brokers, and salespersons?",
        options: [
          "A. Red",
          "B. Green lines",
          "C. Blue",
          "D. Yellow"
        ],
        correct: "B. Green lines"
      },
      {
        question: "What is symbolized by the Map of the Philippines in the context of real estate?",
        options: [
          "A. The importance of environmental sustainability",
          "B. The Philippine archipelago",
          "C. Economic development",
          "D. The ethical standards of real estate professionals"
        ],
        correct: "B. The Philippine archipelago"
      },
      {
        question: "Mr. Santos owns the following landholdings: i. Five (5) hectares devoted to coconuts with no tenant; ii. 500 sq. m. in Juna Subdivision; iii. Two (2) hectares granted by DAR to be converted to raising of poultry; and iv. Five (5) hectares actually, directly and exclusively used as fishponds. How many hectares, if any, can be covered under CARP?",
        options: [
          "A. None",
          "B. 5 hectares",
          "C. 7 hectares",
          "D. 12 hectares"
        ],
        correct: "A. None"
      },
      {
        question: "What does CARP stand for?",
        options: [
          "a. Comprehensive Agricultural Reform Plan",
          "b. Comprehensive Agrarian Reform Program",
          "c. Comprehensive Agricultural Resource Program",
          "d. Community Agrarian Reform Program"
        ],
        correct: "b. Comprehensive Agrarian Reform Program"
      },
      {
        question: "What is the main goal of CARP?",
        options: [
          "a. To promote industrialization in rural areas",
          "b. To distribute agricultural lands to landless farmers",
          "c. To ensure environmental protection",
          "d. To increase the agricultural production of the Philippines"
        ],
        correct: "b. To distribute agricultural lands to landless farmers"
      },
      {
        question: "What does CARPER stand for?",
        options: [
          "a. Comprehensive Agricultural Reform Program Extension with Reforms",
          "b. Comprehensive Agrarian Resource Program Extension with Reforms",
          "c. Comprehensive Agricultural Reform Plan Extension with Rights",
          "d. Community Agrarian Reform Program Extension with Rights"
        ],
        correct: "b. Comprehensive Agrarian Reform Program Extension with Reforms"
      },
      {
        question: "What is the main feature of the CARPER law?",
        options: [
          "a. Providing cash incentives to farmers",
          "b. Extending the deadline for land distribution and introducing reforms",
          "c. Banning the sale of agricultural lands",
          "d. Privatizing government-owned lands"
        ],
        correct: "b. Extending the deadline for land distribution and introducing reforms"
      },
      {
        question: "Which of the following is a key reform introduced by CARPER?",
        options: [
          "a. Reclassification of agricultural land to industrial use",
          "b. The creation of the Agrarian Reform Beneficiaries' Fund",
          "c. The establishment of a national landbank for farmers",
          "d. The compulsory sale of all agricultural lands to the government"
        ],
        correct: "b. The creation of the Agrarian Reform Beneficiaries' Fund"
      },
      {
        question: "Which of the following is an eligible beneficiary under CARP?",
        options: [
          "a. Landowners with more than 12 hectares of land",
          "b. Agricultural workers without land",
          "c. Large-scale agribusiness owners",
          "d. Government officials and their families"
        ],
        correct: "b. Agricultural workers without land"
      },
      {
        question: "What is the land distribution mechanism under CARP?",
        options: [
          "a. Direct sale of government lands to the public",
          "b. Leasing government lands to private entities",
          "c. Distribution of public and private agricultural lands to qualified beneficiaries",
          "d. The auctioning of land to the highest bidder"
        ],
        correct: "c. Distribution of public and private agricultural lands to qualified beneficiaries"
      },
      {
        question: "What happens if a landowner refuses to sell his land under CARP?",
        options: [
          "a. The government can seize the land without compensation",
          "b. The land is reclassified as non-agricultural land",
          "c. The government can acquire the land through compulsory land acquisition",
          "d. The landowner can sell the land at a higher price"
        ],
        correct: "c. The government can acquire the land through compulsory land acquisition"
      },
      {
        question: "What is a key provision of the CARP law regarding land valuation?",
        options: [
          "a. Lands are not subject to taxation after distribution",
          "b. The government can only acquire land at 50% of its market value",
          "c. Lands acquired under CARP are to be valued by an independent commission",
          "d. Compensation for land is based on its market value or an equivalent rate set by DAR"
        ],
        correct: "d. Compensation for land is based on its market value or an equivalent rate set by DAR"
      },
      {
        question: "Which of the following land types is excluded from CARP coverage?",
        options: [
          "a. Public agricultural lands",
          "b. Agricultural lands owned by the government",
          "c. Lands used for residential, commercial, or industrial purposes",
          "d. Lands owned by multinational companies"
        ],
        correct: "c. Lands used for residential, commercial, or industrial purposes"
      },
      {
        question: "What is the significance of the Agrarian Reform Beneficiaries' Fund (ARBF) under CARPER?",
        options: [
          "a. It provides loans to landowners to purchase lands",
          "b. It supports agrarian reform beneficiaries in purchasing agricultural inputs and equipment",
          "c. It compensates landowners for their lands under CARP",
          "d. It supports private investors in agricultural development"
        ],
        correct: "b. It supports agrarian reform beneficiaries in purchasing agricultural inputs and equipment"
      },
      {
        question: "Under CARP, what is the 'certificate of land ownership award' (CLOA)?",
        options: [
          "a. A document proving the government's ownership of the land",
          "b. A certificate given to the landowner after the land is sold",
          "c. A document given to qualified beneficiaries to prove land ownership",
          "d. A certificate stating the land's market value"
        ],
        correct: "c. A document given to qualified beneficiaries to prove land ownership"
      },
      {
        question: "What does CARP provide in terms of landowner compensation?",
        options: [
          "a. Cash or bonds to compensate the landowner",
          "b. An exemption from paying taxes on the acquired land",
          "c. A guarantee of full ownership of land for all farmers",
          "d. The government only compensates landowners who volunteer to sell"
        ],
        correct: "a. Cash or bonds to compensate the landowner"
      },
      {
        question: "Under R.A. No. 3844, the following are causes for terminating leasehold relation, EXCEPT:",
        options: [
          "A. Voluntary surrender",
          "B. Abandonment",
          "C. Death or permanent incapacity of the agricultural lessee (tenant)",
          "D. Absence of an heir to succeed the agricultural lessee"
        ],
        correct: "C. Death or permanent incapacity of the agricultural lessee (tenant)"
      },
      {
        question: "Taxation is the inherent power of the State to impose and collect taxes for the purpose of:",
        options: [
          "a. defraying government necessary expenses for public funds",
          "b. investing in government bonds and securities",
          "c. getting back private properties for development",
          "d. utilizing idle lands for public use"
        ],
        correct: "a. defraying government necessary expenses for public funds"
      },
      {
        question: "John is selling his property in a prime location for PHP500,000. However, to avoid paying the proper property transfer taxes, which are calculated based on the sale price, John decides to underreport the sale price to the government. Instead of declaring the full PHP500,000 sale price, John tells the buyer, Sarah, to report the price as PHP 400,000 on the sales contract. They agree to this so that Sarah can save on transfer taxes, and John can keep a portion of the sale proceeds in cash without it being recorded. This is:",
        options: [
          "A. Valid form of tax avoidance",
          "B. Tax Evasion",
          "C. Tax Minimization",
          "D. Valid as the basis will still be Market Value in the tax declaration"
        ],
        correct: "B. Tax Evasion"
      },
      {
        question: "Which of the following statements is correct regarding the VAT treatment on the sale of properties in the Philippines?",
        options: [
          "A. The sale of properties with annual gross sales of less than P 3,000,000.00 is subject to VAT at a rate of 12%.",
          "B. The sale of properties with annual gross sales of less than P 3,000,000.00 is exempt from VAT.",
          "C. The sale of properties with annual gross sales of less than P 3,000,000.00 is subject to VAT only if the property is commercial.",
          "D. The sale of properties with annual gross sales of less than P 3,000,000.00 is subject to the 3% percentage tax, not VAT."
        ],
        correct: "B. The sale of properties with annual gross sales of less than P 3,000,000.00 is exempt from VAT."
      },
      {
        question: "The following are the effects of CREATE Act, EXCEPT",
        options: [
          "A. Lowering of Percentage Tax Rate from 3% to 1%",
          "B. Deduction of 10% for Building and 20% for Machinery and Equipment",
          "C. Lowering of Corporate Tax Rate from 30% to 25% or 20% for the qualified",
          "D. Deduction of 2% VAT until 2023"
        ],
        correct: "D. Deduction of 2% VAT until 2023"
      },
      {
        question: "John is selling his property for PHP500,000 but underreports the sale price to avoid paying proper property transfer taxes. What is this act?",
        options: [
          "a. Tax Minimization",
          "b. Tax Avoidance",
          "c. Tax Evasion",
          "d. Legal Tax Planning"
        ],
        correct: "c. Tax Evasion"
      },
      {
        question: "What is the VAT rate on the sale of properties in the Philippines?",
        options: [
          "a. 10%",
          "b. 12%",
          "c. 5%",
          "d. 15%"
        ],
        correct: "b. 12%"
      },
      {
        question: "What is the VAT treatment for advance payments made by a lessee for the lease of property?",
        options: [
          "a. Not subject to VAT",
          "b. Subject to VAT when received",
          "c. Subject to VAT only when the lease begins",
          "d. Exempt from VAT"
        ],
        correct: "b. Subject to VAT when received"
      },
      {
        question: "What is the BIR form used for the quarterly filing of VAT on sale of real property?",
        options: [
          "a. BIR Form 2550Q",
          "b. BIR Form 2551Q",
          "c. BIR Form 1700",
          "d. BIR Form 1701"
        ],
        correct: "a. BIR Form 2550Q"
      },
      {
        question: "Which of the following is exempt from VAT?",
        options: [
          "a. Sale of real property held for lease in the ordinary course of trade",
          "b. House and lot with a value exceeding PHP3,600,000",
          "c. Lease of 100 residential units with a monthly rent exceeding PHP15,000",
          "d. Sale of properties with annual gross sales under PHP3,000,000"
        ],
        correct: "d. Sale of properties with annual gross sales under PHP3,000,000"
      },
      {
        question: "What is the VAT treatment of residential properties with a monthly rent of less than PHP15,000 per unit?",
        options: [
          "a. Subject to VAT",
          "b. Subject to 3% percentage tax",
          "c. Exempt from VAT",
          "d. Subject to 5% VAT"
        ],
        correct: "c. Exempt from VAT"
      },
      {
        question: "If a VAT-registered developer sells a lot, is the sale subject to VAT?",
        options: [
          "a. No, the sale of a lot is always exempt from VAT",
          "b. Yes, the sale of a lot is always subject to VAT",
          "c. The sale is subject to VAT only if the lot is commercial",
          "d. Only residential lots are subject to VAT"
        ],
        correct: "b. Yes, the sale of a lot is always subject to VAT"
      },
      {
        question: "What is the tax base for VAT on the sale of services or the use or lease of properties?",
        options: [
          "a. Gross income",
          "b. The selling price or fair market value",
          "c. The contract price",
          "d. Gross receipts"
        ],
        correct: "d. Gross receipts"
      },
      {
        question: "What is the CREATE Law's effect on corporate tax rates for large corporations?",
        options: [
          "a. Increase in corporate tax rates",
          "b. Reduction in corporate tax rates to 25%",
          "c. Introduction of a flat tax rate of 15%",
          "d. Elimination of corporate tax for large corporations"
        ],
        correct: "b. Reduction in corporate tax rates to 25%"
      },
      {
        question: "ABC Leasing Corporation owns several residential units. Some units have a rental price below P 15,000 per month, while others exceed that threshold. Below is the rental breakdown: Unit 1: P12,000/month Unit 2: P20,000/month Unit 3: P10,000/month Unit 4: P18,000/month What is the VAT treatment for the rental income from these residential units?",
        options: [
          "A. All units are exempt from VAT",
          "B. Only the rentals exceeding P15,000 are subject to VAT",
          "C. Rentals from all units are subject to 3% percentage tax",
          "D. Only the units with a rental exceeding P15,000 are subject to 3% percentage tax"
        ],
        correct: "C. Rentals from all units are subject to 3% percentage tax"
      },
      {
        question: "John is a small real estate developer with gross receipts from sales of properties amounting to P2,500,000 for the year. His business is registered for percentage tax, and he is eligible to use the reduced percentage tax rate under the CREATE Law. What is the amount of percentage tax that John must pay?",
        options: [
          "A. P25,000",
          "B. P10,000",
          "C. P7,500",
          "D. P15,000"
        ],
        correct: "A. P25,000"
      },
      {
        question: "A residential condominium in Makati City with a floor area of 50 sqm has a Gross Selling Price (GSP) of PHP 1,000,000.00. The existing zonal value per square meter for that condo in Makati is PHP 50,000.00/sqm. You are the buyer, and the seller is not engaged in the real estate business. The seller informs you that the buyer will shoulder the Capital Gains Tax (CGT) as part of the deal. How much CGT will the buyer have to pay the seller on top of the selling price?",
        options: [
          "A. PHP60,000.00",
          "B. PHP150,000.00",
          "C. PHP200,000.00",
          "D. PHP 180,000.00"
        ],
        correct: "B. PHP150,000.00"
      },
      {
        question: "In the previous scenario, the Gross Selling Price (GSP) of the residential condominium is PHP 1,000,000.00, and the Zonal Value (FMV) is PHP 2,500,000.00. The seller is willing to shoulder the Capital Gains Tax (CGT) only up to the selling price, and the buyer will shoulder the CGT for the excess or difference between the GSP and FMV. How would you compute the CGT the buyer will need to pay for the difference between the GSP and FMV?",
        options: [
          "A. PHP60,000.00",
          "B. PHP90,000.00",
          "C. PHP150,000.00",
          "D. PHP 180,000.00"
        ],
        correct: "B. PHP90,000.00"
      },
      {
        question: "A natural person sells their principal residence and uses the full proceeds to acquire or construct a new principal residence within eighteen (18) months from the sale. According to the tax law, how will the sale of the principal residence be taxed?",
        options: [
          "A. The sale is subject to Capital Gains Tax (CGT), regardless of the new purchase.",
          "B. The sale is exempt from CGT, provided the proceeds are used to acquire or construct a new principal residence within 18 months.",
          "C. The sale is subject to VAT, regardless of the purchase of a new residence.",
          "D. The sale is subject to percentage tax, and the proceeds must be used for any purpose."
        ],
        correct: "B. The sale is exempt from CGT, provided the proceeds are used to acquire or construct a new principal residence within 18 months."
      },
      {
        question: "In addition to the sale of a principal residence being exempt from Capital Gains Tax (CGT) if the proceeds are fully utilized to acquire or construct a new principal residence within 18 months, what are the additional conditions for availing this exemption?",
        options: [
          "A. The exemption is available only if the new residence is purchased within 12 months, and the exemption can be availed multiple times.",
          "B. The Commissioner of Internal Revenue must be notified through a prescribed return within 30 days from the date of sale, and the exemption can be availed once every ten years.",
          "C. The exemption can be availed multiple times, provided that the buyer is not a real estate developer.",
          "D. The exemption is available only if the new residence is constructed within 5 years, and the buyer must file for an exemption every year."
        ],
        correct: "B. The Commissioner of Internal Revenue must be notified through a prescribed return within 30 days from the date of sale, and the exemption can be availed once every ten years."
      },
      {
        question: "In the case of a sale or transfer of a principal residence, who is responsible for withholding the 6% Capital Gains Tax (CGT), and how is the payment managed?",
        options: [
          "A. The Seller is responsible for paying the CGT directly to the Bureau of Internal Revenue (BIR), and no escrow agreement is required.",
          "B. The Buyer/Transferee is responsible for withholding the CGT, which is then deposited in an interest-bearing account under an Escrow Agreement with an Authorized Agent Bank (AAB), to be released upon certification from the RDO that the proceeds were used for a new principal residence.",
          "C. The Buyer/Transferee is responsible for paying the CGT to the BIR directly, and there is no escrow involved.",
          "D. The Seller is responsible for withholding the CGT, which is then deposited with the BIR, and no escrow agreement is required."
        ],
        correct: "B. The Buyer/Transferee is responsible for withholding the CGT, which is then deposited in an interest-bearing account under an Escrow Agreement with an Authorized Agent Bank (AAB), to be released upon certification from the RDO that the proceeds were used for a new principal residence."
      },
      {
        question: "What is Creditable Withholding Tax (CWT) in the context of the sale of an ordinary asset or services?",
        options: [
          "A. A tax imposed on the buyer that is non-refundable and cannot be used to offset future tax liabilities.",
          "B. A tax withheld by the buyer/withholding agent from the payment to the seller for the sale of an ordinary asset or services, and is creditable against the seller's income tax payable.",
          "C. A tax that is paid directly by the seller to the Bureau of Internal Revenue (BIR) without any offsetting benefits.",
          "D. A tax withheld by the seller from the buyer's payment and paid directly to the BIR as a final tax."
        ],
        correct: "B. A tax withheld by the buyer/withholding agent from the payment to the seller for the sale of an ordinary asset or services, and is creditable against the seller's income tax payable."
      },
      {
        question: "In determining the base for Creditable Withholding Tax (CWT), the withholding agent/buyer is required to withhold the tax based on which of the following?",
        options: [
          "A. The gross selling price only, regardless of the fair market value.",
          "B. The fair market value only, regardless of the gross selling price.",
          "C. The higher of the gross selling price or the fair market value.",
          "D. The total amount of consideration, excluding the gross selling price and fair market value."
        ],
        correct: "C. The higher of the gross selling price or the fair market value."
      },
      {
        question: "Which of the following is true is about business of real estate?",
        options: [
          "A. The seller/transferor must pay VAT on all real estate transactions, regardless of the number of transactions.",
          "B. The seller/transferor must have completed at least six taxable transactions, regardless of the amount, to be considered habitually engaged in the real estate business.",
          "C. The seller/transferor will be subject to the payment of Capital Gains Tax (CGT) if more than six transactions are completed in the preceding year.",
          "D. The seller/transferor is exempt from paying any taxes if the total value of the real estate transactions exceeds PHP 3,000,000."
        ],
        correct: "B. The seller/transferor must have completed at least six taxable transactions, regardless of the amount, to be considered habitually engaged in the real estate business."
      },
      {
        question: "The Creditable Withholding Tax in the sale of an acquired foreclosed asset of a bank in the amount of Php850,000.00 is:",
        options: [
          "A. 1.5%",
          "B. 3.0%",
          "C. 5.0%",
          "D. 6.0%"
        ],
        correct: "D. 6.0%",
      },
      {
        question: "Maria Reyes, an individual real estate service practitioner, earned PHP 2,500,000 in gross income during the current year. How much is the Withholding Tax that she must pay, given the tax rates based on income?",
        options: [
          "A) 5% of her gross income",
          "B) 10% of her gross income",
          "C) 5% of her gross income, as her income is below PHP 3,000,000",
          "D) 10% of her gross income, as her income exceeds PHP 3,000,000"
        ],
        correct: "C) 5% of her gross income, as her income is below PHP 3,000,000"
      },
      {
        question: "What is Transfer Tax?",
        options: [
          "A) A tax imposed on the sale, donation, barter, or transfer of personal property at a maximum rate of 1%.",
          "B) A tax imposed on the sale, donation, barter, or transfer of ownership or title of real property at a rate of up to 50% of 1% (75% of 1% in Metro Manila), based on the total consideration or fair market value, whichever is higher.",
          "C) A tax imposed on income derived from the sale of real property at a fixed rate of 5%.",
          "D) A tax on the transfer of ownership in real property based solely on the market value of the land, with no consideration for the transfer price."
        ],
        correct: "B) A tax imposed on the sale, donation, barter, or transfer of ownership or title of real property at a rate of up to 50% of 1% (75% of 1% in Metro Manila), based on the total consideration or fair market value, whichever is higher."
      },
      {
        question: "A residential condominium in BGC, Taguig City with a floor area of 100 sqm was sold for a Gross Selling Price (GSP) of PHP 5,000,000.00, while the Market Value according to the Tax Declaration is PHP 3,000,000.00. How much will the Transfer Tax be?",
        options: [
          "A) PHP 20,000.00",
          "B) PHP 25,000.00",
          "C) PHP 30,000.00",
          "D) PHP 37,500.00"
        ],
        correct: "D) PHP 37,500.00"
      },
      {
        question: "Under Section 195 of the Local Government Code (LGC), what is the time frame within which a taxpayer may file a written protest after receiving a notice of assessment from the local treasurer?",
        options: [
          "A) 30 days",
          "B) 45 days",
          "C) 60 days",
          "D) 90 days"
        ],
        correct: "C) 60 days"
      },
      {
        question: "A loan agreement is taken out to purchase real property, and the loan amount is PHP 1,500,000.00. How much Documentary Stamp Tax (DST) is due on this loan?",
        options: [
          "A) PHP 11,250.00",
          "B) PHP 11,500.00",
          "C) PHP 12,000.00",
          "D) PHP 12,250.00"
        ],
        correct: "A) PHP 11,250.00"
      },
      {
        question: "If the monthly rent is PHP 50,000.00 and the lease term is 5 years, what is the DST?",
        options: [
          "A) PHP 196.00",
          "B) PHP 198.00",
          "C) PHP 200.00",
          "D) PHP 204.00"
        ],
        correct: "B) PHP 198.00"
      },
      {
        question: "If the amount secured for a mortgage loan is PHP 106,000.00, what is the Documentary Stamp Tax (DST)?",
        options: [
          "A) PHP 440.00",
          "B) PHP 460.00",
          "C) PHP 480.00",
          "D) PHP 500.00"
        ],
        correct: "B) PHP 460.00"
      },
      {
        question: "What is the deadline for filing the DST return for a taxable document signed by Mr. Alex Cruz on August 20, 2025?",
        options: [
          "A) August 25, 2025",
          "B) September 5, 2025",
          "C) September 25, 2025",
          "D) October 5, 2025"
        ],
        correct: "B) September 5, 2025"
      },
      {
        question: "When are the deadlines for the payment of Capital Gains Tax (CGT) and Documentary Stamp Tax (DST) following the expiration of the applicable statutory redemption period under involuntary sales?",
        options: [
          "A) CGT: 30 days from the close of the month; DST: 5 days from the expiration of the statutory redemption period",
          "B) CGT: 30 days from the expiration of the statutory redemption period; DST: 5 days after the close of the month",
          "C) CGT: 60 days from the expiration of the statutory redemption period; DST: 5 days from the expiration of the statutory redemption period",
          "D) CGT: 15 days from the expiration of the statutory redemption period; DST: 10 days after the close of the month"
        ],
        correct: "B) CGT: 30 days from the expiration of the statutory redemption period; DST: 5 days after the close of the month"
      },
      {
        question: "What are the deadlines for the payment and filing of taxes in the case of an involuntary sale of ordinary assets following the lapse of the applicable statutory redemption period?",
        options: [
          "A) CWT: 10 days after the close of the month; VAT: 20th (monthly) or 25th (quarterly) of the following month; DST: 5 days after the close of the month",
          "B) CWT: 15 days after the close of the month; VAT: 10th (monthly) or 15th (quarterly) of the following month; DST: 5 days after the expiration of the statutory redemption period",
          "C) CWT: 5 days after the close of the month; VAT: 15th (monthly) or 20th (quarterly) of the following month; DST: 10 days after the close of the month",
          "D) CWT: 10 days after the close of the month; VAT: 25th (monthly) or 30th (quarterly) of the following month; DST: 10 days after the expiration of the statutory redemption period"
        ],
        correct: "A) CWT: 10 days after the close of the month; VAT: 20th (monthly) or 25th (quarterly) of the following month; DST: 5 days after the close of the month"
      },
      {
        question: "In the case of an involuntary sale after the lapse of the statutory redemption period, what is the tax base for the taxes imposed?",
        options: [
          "A) The price of the highest bidder",
          "B) The higher of the Bid Price, BIR Zonal Value, or Market Value of the assessor",
          "C) The lowest of the Bid Price, BIR Zonal Value, or Market Value of the assessor",
          "D) The BIR Zonal Value only"
        ],
        correct: "B) The higher of the Bid Price, BIR Zonal Value, or Market Value of the assessor"
      },
      {
        question: "What is the exemption threshold for donor's tax under the TRAIN Law?",
        options: [
          "A) PHP 200,000",
          "B) PHP 300,000",
          "C) PHP 250,000",
          "D) PHP 500,000"
        ],
        correct: "C) PHP 250,000"
      },
      {
        question: "If a donation exceeds PHP 250,000, what is the donor's tax payable on a PHP 1,000,000 real property donation under the TRAIN Law?",
        options: [
          "A) PHP 50,000",
          "B) PHP 45,000",
          "C) PHP 75,000",
          "D) PHP 60,000"
        ],
        correct: "B) PHP 45,000"
      },
      {
        question: "Which of the following types of donations are exempt from donor's tax under the TRAIN Law?",
        options: [
          "A) Donations to private individuals",
          "B) Donations to qualified charitable institutions",
          "C) Donations to political parties",
          "D) Donations to for-profit corporations"
        ],
        correct: "B) Donations to qualified charitable institutions"
      },
      {
        question: "What is the tax base for real property donations under the TRAIN Law?",
        options: [
          "A) The selling price of the property",
          "B) The fair market value or zonal value, whichever is higher",
          "C) The assessed value of the property",
          "D) The appraised value of the property"
        ],
        correct: "B) The fair market value or zonal value, whichever is higher"
      },
      {
        question: "Who is responsible for paying the donor's tax?",
        options: [
          "A) The recipient (donee)",
          "B) The donor",
          "C) The Bureau of Internal Revenue (BIR)",
          "D) The government"
        ],
        correct: "B) The donor"
      },
      {
        question: "What is the filing requirement for donations exceeding PHP 250,000?",
        options: [
          "A) No filing required",
          "B) Filing within 60 days",
          "C) Filing a Donor's Tax Return within 30 days",
          "D) Filing a Donor's Tax Return within 12 months"
        ],
        correct: "C) Filing a Donor's Tax Return within 30 days"
      },
      {
        question: "What is the exemption amount for the net estate under the TRAIN Law?",
        options: [
          "A) PHP 200,000",
          "B) PHP 500,000",
          "C) PHP 1,000,000",
          "D) PHP 10,000,000"
        ],
        correct: "A) PHP 200,000"
      },
      {
        question: "What is the family home exemption for estate tax under the TRAIN Law?",
        options: [
          "A) PHP 5 million",
          "B) PHP 10 million",
          "C) PHP 1 million",
          "D) PHP 500,000"
        ],
        correct: "B) PHP 10 million"
      },
      {
        question: "What must be filed within one (1) year from the decedent's death under the estate tax provisions of the TRAIN Law?",
        options: [
          "A) A tax clearance certificate",
          "B) A donation receipt",
          "C) An estate tax return",
          "D) A will"
        ],
        correct: "C) An estate tax return"
      },
      {
        question: "Under the TRAIN Law, what is the standard deduction for estate tax purposes?",
        options: [
          "A) PHP 2,000,000",
          "B) PHP 5,000,000",
          "C) PHP 1,000,000",
          "D) PHP 10,000,000"
        ],
        correct: "B) PHP 5,000,000"
      },
      {
        question: "If the decedent is an overseas Filipino, what special rule applies for estate tax under the TRAIN Law?",
        options: [
          "A) Estate tax is waived entirely",
          "B) Different tax rates apply",
          "C) Additional requirements such as submitting documents proving death and the estate's value abroad",
          "D) Only local estate taxes are applicable"
        ],
        correct: "C) Additional requirements such as submitting documents proving death and the estate's value abroad"
      },
      {
        question: "How much would Maria have to pay in Donor's Tax for her real property donation of PHP 1,500,000, under the provisions of the TRAIN Law?",
        options: [
          "A) PHP 75,000",
          "B) PHP 70,000",
          "C) PHP 45,000",
          "D) PHP 90,000"
        ],
        correct: "A) PHP 75,000"
      },
      {
        question: "Which of the following properties is exempt from Real Property Tax (RPT) under the provisions for religious, charitable, and educational institutions in the Philippines?",
        options: [
          "A) A residential property owned by a religious organization and leased out for commercial purposes.",
          "B) A piece of land owned by a charitable institution, used for commercial activities to generate income.",
          "C) A school owned by a religious institution, used exclusively for educational purposes, and not rented out for any other use.",
          "D) A building owned by a church, leased to a business for commercial events and activities."
        ],
        correct: "C) A school owned by a religious institution, used exclusively for educational purposes, and not rented out for any other use."
      },
      {
        question: "A 4-storey building is owned by an educational institution. The 2nd to the 4th floors are used for educational purposes, while the 1st floor is leased out for full-time commercial operations. Will the predominant use rule apply to make the entire building exempt from Real Property Tax?",
        options: [
          "A) Yes, since the building is primarily used for educational purposes, it qualifies for the exemption.",
          "B) No, the building does not qualify for exemption because the 1st floor is used for commercial purposes. The rule on split assessment will apply.",
          "C) Yes, the building qualifies for the exemption because the majority of the floors are used for educational purposes.",
          "D) No, the building will be subject to full Real Property Tax as it is partially used for commercial purposes."
        ],
        correct: "B) No, the building does not qualify for exemption because the 1st floor is used for commercial purposes. The rule on split assessment will apply."
      },
      {
        question: "The assessment of level of the improvements of a property owned by Mrs. Lerna will be based on the classification and",
        options: [
          "A) Fair market value of the improvement of the assessor",
          "B) Assessed value of the improvement of the assessor",
          "C) Zonal value of the improvements",
          "D) Declared value by the owner x tax rate"
        ],
        correct: "B) Assessed value of the improvement of the assessor"
      },
      {
        question: "A special levy may be imposed for the lands specially benefited by the public works projects or improvements funded by the local government unit provided, the special levy shall not exceed",
        options: [
          "A) 5% of the assessed value",
          "B) 60% of the actual cost of such projects",
          "C) 50% of the actual cost of projects and improvements",
          "D) 2% of the assessed value"
        ],
        correct: "B) 60% of the actual cost of such projects"
      },
      {
        question: "When are the quarterly installments of Real Property Tax (RPT) due for a property owner who opts to pay in installments?",
        options: [
          "A) February 28, May 31, August 31, and November 30",
          "B) March 31, June 30, September 30, and December 31",
          "C) January 31, April 30, July 31, and October 31",
          "D) January 31, April 30, July 31, and December 31"
        ],
        correct: "B) March 31, June 30, September 30, and December 31"
      },
      {
        question: "What is the penalty imposed for late payment of Real Property Tax (RPT)?",
        options: [
          "A) 1% per month",
          "B) 2% per month, with a maximum of 36 months",
          "C) 5% per month",
          "D) 10% per month"
        ],
        correct: "B) 2% per month, with a maximum of 36 months"
      },
      {
        question: "Where is the Special Education Fund (SEF) allocated after being collected by the Local Government Unit (LGU)?",
        options: [
          "A) To the local government for infrastructure projects",
          "B) To the local school boards",
          "C) To the national government for educational programs",
          "D) To public hospitals in the municipality"
        ],
        correct: "B) To the local school boards"
      },
      {
        question: "What is the total Real Property Tax (RPT) and Special Education Fund (SEF) for the land and improvement combined?",
        options: [
          "A) ₱6,000",
          "B) ₱7,200",
          "C) ₱8,400",
          "D) ₱9,600"
        ],
        correct: "B) ₱7,200"
      },
      {
        question: "The following does not have a BIR zonal value:",
        options: [
          "A) Condominium unit",
          "B) Agricultural land",
          "C) Condominium parking space",
          "D) Building improvements"
        ],
        correct: "D) Building improvements"
      },
      {
        question: "Which agency is responsible for leading the implementation of the provisions of RPVARA?",
        options: [
          "A) Department of Budget and Management (DBM)",
          "B) Bureau of Local Government Finance (BLGF)",
          "C) Department of Finance (DOF)",
          "D) Bureau of Internal Revenue (BIR)"
        ],
        correct: "B) Bureau of Local Government Finance (BLGF)"
      },
      {
        question: "How often should the Bureau of Local Government Finance (BLGF), through the RPVS, revise the Philippine Valuation Standards (PVS)?",
        options: [
          "A) Every five (5) years",
          "B) Every two (2) years",
          "C) Every three (3) years",
          "D) Every year"
        ],
        correct: "C) Every three (3) years"
      },
      {
        question: "What is the mandatory requirement for local assessors before submitting their proposed Schedule of Market Values (SMV) under RPVARA?",
        options: [
          "A) The submission of a formal letter to the BLGF",
          "B) Conducting two (2) mandatory public consultations within sixty (60) days",
          "C) Preparing a report to the Department of Finance",
          "D) Updating property assessments every year"
        ],
        correct: "B) Conducting two (2) mandatory public consultations within sixty (60) days"
      },
      {
        question: "How long can a person avail of the real property tax amnesty granted under RPVARA?",
        options: [
          "A) Within one (1) year after the effectivity of RPVARA",
          "B) Within two (2) years after the effectivity of RPVARA",
          "C) Within three (3) years after the effectivity of RPVARA",
          "D) There is no time limit for availing the amnesty"
        ],
        correct: "B) Within two (2) years after the effectivity of RPVARA"
      },
      {
        question: "Which law defines open spaces in residential subdivisions?",
        options: [
          "a) PD 1517",
          "b) PD 957",
          "c) PD 1216",
          "d) PD 1586"
        ],
        correct: "c) PD 1216"
      },
      {
        question: "Which law created the Real Estate Investment Trust Act?",
        options: [
          "a) RA 9646",
          "b) RA 7899",
          "c) RA 9856",
          "d) RA 6657"
        ],
        correct: "c) RA 9856"
      },
      {
        question: "What is the main purpose of PD 957?",
        options: [
          "a) To regulate housing financing",
          "b) To protect buyers of subdivisions and condominiums",
          "c) To establish urban land reform",
          "d) To create tax incentives for real estate developers"
        ],
        correct: "b) To protect buyers of subdivisions and condominiums"
      },
      {
        question: "Which law provides for the protection of realty installment buyers?",
        options: [
          "a) RA 7160",
          "b) RA 6552",
          "c) RA 9646",
          "d) RA 11201"
        ],
        correct: "b) RA 6552"
      },
      {
        question: "When did the Comprehensive Agrarian Reform Law take effect?",
        options: [
          "a) August 7, 2009",
          "b) June 15, 1988",
          "c) June 11, 1978",
          "d) October 29, 1997"
        ],
        correct: "b) June 15, 1988"
      },
      {
        question: "Which law authorizes the Ministry of Human Settlements to establish standards for economic and socialized housing projects?",
        options: [
          "a) RA 7899",
          "b) RA 9646",
          "c) BP 220",
          "d) RA 7160"
        ],
        correct: "c) BP 220"
      },
      {
        question: "What year did the Urban Development and Housing Act take effect?",
        options: [
          "a) 1997",
          "b) 2009",
          "c) 1982",
          "d) 1992"
        ],
        correct: "d) 1992"
      },
      {
        question: "Which law is known as the Tax Reform Act of 1997?",
        options: [
          "a) RA 8424",
          "b) RA 10963",
          "c) RA 11534",
          "d) RA 11953"
        ],
        correct: "a) RA 8424"
      },
      {
        question: "Which law provides the legal framework for the establishment of the Department of Human Settlements and Urban Development (DHSUD)?",
        options: [
          "a) RA 9646",
          "b) RA 11201",
          "c) RA 11613",
          "d) RA 7899"
        ],
        correct: "b) RA 11201"
      },
      {
        question: "Which law protects indigenous people's rights, including their land rights in the Philippines?",
        options: [
          "a) RA 9646",
          "b) RA 8371",
          "c) RA 7899",
          "d) RA 6657"
        ],
        correct: "b) RA 8371"
      },
    ],
  },
  {
    id: "part2",
    title: "Part 2 - Special and Technical Knowledge",
    questions: [
      {
        question: "In the absence of any provision in the master deed of a condominium project, the interest of the unit owners in the common areas shall be:",
        options: ["A. Proportionate", "B. Based on Value", "C. Equal", "D. Decided by the condominium corporation"],
        correct: "C. Equal"
      },
      {
        question: "Amendment to the master of deed of a condominium project approved by majority of registered owner also need to be approved by the city engineer and",
        options: ["A. NHA", "B. HUDCC", "C. LRA", "D. DHSUD"],
        correct: "D. DHSUD"
      },
      {
        question: "Regardless of classification, plan approval, issuance of development permit and license to sell remained with DHSUD for",
        options: ["A. High-end Subdivision Project", "B. Condominium Project", "C. Simple Subdivision Project", "D. Public Market Project"],
        correct: "B. Condominium Project"
      },
      {
        question: "What is the primary purpose of Republic Act No. 7899?",
        options: [
          "a) To regulate real estate tax policies",
          "b) To amend certain provisions of the Condominium Act",
          "c) To establish zoning laws for condominium projects",
          "d) To provide tax exemptions for condominium owners"
        ],
        correct: "b) To amend certain provisions of the Condominium Act"
      },
      {
        question: "Under RA 7899, how can the enabling or master deed of a condominium be amended or revoked?",
        options: [
          "a) By a vote of two-thirds of the board members",
          "b) Upon registration of an instrument executed by a simple majority of the registered owners",
          "c) By a court order",
          "d) By the approval of the mayor and city engineer"
        ],
        correct: "b) Upon registration of an instrument executed by a simple majority of the registered owners"
      },
      {
        question: "What is required for the amendment or revocation of the master deed after approval by the simple majority of registered owners?",
        options: [
          "a) Approval by the National Housing Authority (NHA)",
          "b) Approval by the Housing and Land Use Regulatory Board (DHSUD) and the city/municipal engineer",
          "c) Approval by the local government unit only",
          "d) Registration with the Department of Justice"
        ],
        correct: "b) Approval by the Housing and Land Use Regulatory Board (DHSUD) and the city/municipal engineer"
      },
      {
        question: "Which document is required to check the citizenship shareholdings of owners in a condominium project under RA 7899?",
        options: [
          "a) Condominium Master Deed",
          "b) Certificate of Management issued by the Office of Administration",
          "c) Certificate of Ownership issued by the LRA",
          "d) Tax Declaration"
        ],
        correct: "b) Certificate of Management issued by the Office of Administration"
      },
      {
        question: "What defines the boundary of a condominium unit according to RA 7899?",
        options: [
          "a) The outer perimeter of the building",
          "b) The exterior walls, roof, and foundation of the building",
          "c) The interior surfaces of the perimeter walls, floors, ceilings, windows, and doors",
          "d) The entire building including the common areas"
        ],
        correct: "c) The interior surfaces of the perimeter walls, floors, ceilings, windows, and doors"
      },
      {
        question: "What are considered the boundaries of the common areas in a condominium?",
        options: [
          "a) Individual unit's balcony",
          "b) Perimeter walls, columns, floors, roofs, and foundations",
          "c) The interior of each unit",
          "d) Only the building's elevators"
        ],
        correct: "b) Perimeter walls, columns, floors, roofs, and foundations"
      },
      {
        question: "Under RA 7899, does a condominium have a fixed duration of 50 years?",
        options: [
          "a) Yes, all condominiums last only 50 years under the law",
          "b) No, only if the condominium is obsolete, uneconomic, and over 50% of shareholders oppose repairs, can the condominium be demolished",
          "c) Yes, unless the developers decide to extend it",
          "d) No, the maximum duration is 30 years"
        ],
        correct: "b) No, only if the condominium is obsolete, uneconomic, and over 50% of shareholders oppose repairs, can the condominium be demolished"
      },
      {
        question: "What is the purpose of a master deed in a condominium project?",
        options: [
          "a) To define the layout and blueprint of the condominium building",
          "b) To outline the rights, obligations, and responsibilities of property owners in the condominium",
          "c) To serve as a document for transferring ownership of units",
          "d) To provide tax exemptions for condominium owners"
        ],
        correct: "b) To outline the rights, obligations, and responsibilities of property owners in the condominium"
      },
      {
        question: "What is the function of a deed of restriction in a condominium?",
        options: [
          "a) It outlines the building's maintenance schedule",
          "b) It imposes limitations or restrictions on the use, transfer, or development of property in the condominium",
          "c) It specifies the ownership rights of individual unit owners",
          "d) It governs the distribution of condominium profits"
        ],
        correct: "b) It imposes limitations or restrictions on the use, transfer, or development of property in the condominium"
      },
      {
        question: "What is the required number of votes for a condominium corporation to sell the common areas of the property?",
        options: [
          "a) A unanimous vote of all registered owners",
          "b) A simple majority of registered owners",
          "c) A two-thirds majority of the condominium board",
          "d) Approval by the Housing and Land Use Regulatory Board"
        ],
        correct: "b) A simple majority of registered owners"
      },
      {
        question: "The performance bond for a subdivision project may be in the form of a surety bond equivalent to",
        options: [
          "A. 30% of the development cost",
          "B. 40% of the development cost",
          "C. 20% of the development cost",
          "D. 25% of the development cost"
        ],
        correct: "C. 20% of the development cost"
      },
      {
        question: "HLURB function relative to subdivision that has been devolved to the Local Government Unit pursuant to the Local Government Code.",
        options: [
          "A. Approval of Subdivision Plans",
          "B. Approval of Mortgages",
          "C. Approval of Subdivision Business permits",
          "D. Approval of developer's Master Deed of Restrictions"
        ],
        correct: "A. Approval of Subdivision Plans"
      },
      {
        question: "\"tumbok\" lot is known as a:",
        options: ["A. Cul-de-sac", "B. Thru Lot", "C. Key Lot", "D. Inner Lot"],
        correct: "C. Key Lot"
      },
      {
        question: "What is the publication requirement for the application for registration of subdivision projects?",
        options: [
          "A. Publish in a local newspaper for three consecutive months",
          "B. Publish in two newspapers of general circulation once a week for two consecutive weeks",
          "C. Post a public notice in the local government office",
          "D. Publish a quarterly report in a national newspaper"
        ],
        correct: "B. Publish in two newspapers of general circulation once a week for two consecutive weeks"
      },
      {
        question: "When is a subdivision project considered registered with the DHSUD?",
        options: [
          "A. Upon payment of registration fees",
          "B. Upon completion of the publication requirement",
          "C. After the license to sell is obtained",
          "D. When the developer submits the subdivision plan"
        ],
        correct: "B. Upon completion of the publication requirement"
      },
      {
        question: "Can a developer start selling a subdivision project immediately after the registration certificate is issued?",
        options: [
          "A. Yes, no further steps are needed",
          "B. No, the developer must first obtain a license to sell",
          "C. Yes, but only if the development is 50% complete",
          "D. No, the developer must wait for a 6-month approval process"
        ],
        correct: "B. No, the developer must first obtain a license to sell"
      },
      {
        question: "What must a developer or owner of a subdivision project obtain in order to mortgage the property?",
        options: [
          "A. Only a written consent from the homeowners",
          "B. No approval is required",
          "C. Written approval from DHSUD and evidence of loan usage for development",
          "D. A court order"
        ],
        correct: "C. Written approval from DHSUD and evidence of loan usage for development"
      },
      {
        question: "Who shall initiate the organization of a homeowners association in a subdivision project?",
        options: ["A. Local government unit (LGU)", "B. Developer", "C. Individual buyers", "D. DHSUD"],
        correct: "B. Developer"
      },
      {
        question: "What is the punishment for a developer who violates the provisions of PD 957?",
        options: [
          "A. A fine of not more than P5,000",
          "B. A fine of not more than P10,000 and/or imprisonment of not more than 3 years",
          "C. A fine of not more than P20,000 and/or imprisonment of not more than 10 years",
          "D. A suspension of business activities for one year"
        ],
        correct: "C. A fine of not more than P20,000 and/or imprisonment of not more than 10 years"
      },
      {
        question: "Developer B has submitted his subdivision project for registration with DHSUD and completed the necessary publication. After receiving the registration certificate, Developer B starts to build the infrastructure but has no plans to sell the units just yet. He is planning to finance the remaining development through a bank loan. What must Developer B do in order to mortgage the subdivision project or the lots thereof?",
        options: [
          "A. Submit the project's tax returns to the Bureau of Internal Revenue (BIR)",
          "B. Secure written approval from DHSUD and show that the loan proceeds will be used for development",
          "C. Publish a public notice in two newspapers of general circulation",
          "D. Obtain approval from the homeowners association"
        ],
        correct: "B. Secure written approval from DHSUD and show that the loan proceeds will be used for development"
      },
      {
        question: "What rights does Julio have if the developer fails to complete the subdivision on time or according to the approved plans?",
        options: [
          "A. The homeowner must continue to pay the installment regardless of delays",
          "B. The homeowner can request a refund of their payments, including interest, if the developer fails to deliver",
          "C. The homeowner can sue for damages only after 5 years of delay",
          "D. The homeowner can request a reduction in the purchase price"
        ],
        correct: "B. The homeowner can request a refund of their payments, including interest, if the developer fails to deliver"
      },
      {
        question: "What is a \"block\"?",
        options: [
          "A) A subdivision lot intended for parking only.",
          "B) A parcel of land bounded by streets, alleys, or other features, intended for buildings.",
          "C) A type of housing unit in a residential development.",
          "D) A specific area designated for commercial purposes."
        ],
        correct: "B) A parcel of land bounded by streets, alleys, or other features, intended for buildings."
      },
      {
        question: "What is a \"fireblock\" under BP 220?",
        options: [
          "A) A wall separating two units that resists the spread of fire, made of masonry construction.",
          "B) A fire-resistant door placed in a living unit.",
          "C) A type of window designed to withstand fire.",
          "D) A safety feature for electrical wiring in homes."
        ],
        correct: "A) A wall separating two units that resists the spread of fire, made of masonry construction."
      },
      {
        question: "What is a \"single-family attached dwelling\" as defined by BP 220?",
        options: [
          "A) A dwelling unit for one family surrounded by permanent open spaces.",
          "B) A dwelling containing two or more separate living units separated by party walls, such as duplexes or row houses.",
          "C) A dwelling unit designed for three or more families with shared services.",
          "D) A building meant for commercial use with separate offices."
        ],
        correct: "B) A dwelling containing two or more separate living units separated by party walls, such as duplexes or row houses."
      },
      {
        question: "What is the preferred slope of land for high-density development under BP 220?",
        options: ["A) 0 to 5%", "B) Flat land only.", "C) Land with slopes up to 30%.", "D) Land with a slope not greater than 15%."],
        correct: "A) 0 to 5%"
      },
      {
        question: "Under BP 220, what is required for a subdivision development larger than 30 hectares?",
        options: [
          "A) It must be submitted for approval by the local government only.",
          "B) A detailed Environmental Impact Assessment (EIA) is required.",
          "C) Only a construction permit is required.",
          "D) No special requirements are necessary."
        ],
        correct: "B) A detailed Environmental Impact Assessment (EIA) is required."
      },
      {
        question: "Which of the following is a critical requirement for a developer seeking approval to mortgage a subdivision project or lot under BP 220?",
        options: [
          "A) Approval from the local homeowners' association.",
          "B) Proof that the proceeds of the mortgage loan will be used for the development of the subdivision.",
          "C) Full payment of property taxes for the entire subdivision.",
          "D) A finalized buyer's list for the subdivision."
        ],
        correct: "B) Proof that the proceeds of the mortgage loan will be used for the development of the subdivision."
      },
      {
        question: "What is the specific minimum height requirement for a fire wall separating two living units as per BP 220?",
        options: [
          "A) 0.30 meter above the highest portion of the roof attached to it.",
          "B) 1 meter above the highest portion of the roof attached to it.",
          "C) 2 meters above the lowest portion of the wall.",
          "D) 1.5 meters above the highest portion of the roof attached to it."
        ],
        correct: "A) 0.30 meter above the highest portion of the roof attached to it."
      },
      {
        question: "According to BP 220, the price of saleable lots for single detached units should not exceed what percentage of the house and lot package?",
        options: ["A) 30%", "B) 40%", "C) 50%", "D) 60%"],
        correct: "B) 40%"
      },
      {
        question: "All except one has a minimum level of completion of a complete house:",
        options: ["a. Economic Housing", "b. Socialized housing", "c. Open Market housing", "d. Medium Cost housing"],
        correct: "b. Socialized housing"
      },
      {
        question: "For single family dwellings, all yards must have at least ___ m horizontal dimension",
        options: ["A. 1.5", "B. 2.0", "C. 3", "D. 1.2"],
        correct: "B. 2.0"
      },
      {
        question: "Under BP 220, the minimum road right-of-way (ROW) for residential streets in a subdivision project is:",
        options: ["A) 6 meters", "B) 8 meters", "C) 10 meters", "D) 12 meters"],
        correct: "A) 6 meters"
      },
      {
        question: "For areas with a slope of 5-15% under BP 220, the maximum allowable density for housing development is:",
        options: ["A) 10 units per hectare", "B) 15 units per hectare", "C) 20 units per hectare", "D) 25 units per hectare"],
        correct: "C) 20 units per hectare"
      },
      {
        question: "The minimum width of an alley serving residential lots under BP 220 must be at least:",
        options: ["A) 2 meters", "B) 4 meters", "C) 5 meters", "D) 6 meters"],
        correct: "A) 2 meters"
      },
      {
        question: "Under BP 220, which of the following is not considered a basic need for human settlements?",
        options: ["A) Water supply", "B) Storm drainage", "C) High-speed internet", "D) Electricity"],
        correct: "C) High-speed internet"
      },
      {
        question: "Under BP 220, what is the maximum number of row houses allowed per block in a subdivision?",
        options: ["A) 15 units", "B) 20 units", "C) 25 units", "D) 30 units"],
        correct: "B) 20 units"
      },
      {
        question: "Under PD 957, a fire wall separating two adjoining units must extend vertically from the lowest portion of the wall to at least:",
        options: [
          "A) 0.30 meters above the roof",
          "B) 0.50 meters above the roof",
          "C) 1.00 meter above the roof",
          "D) 1.50 meters above the roof"
        ],
        correct: "A) 0.30 meters above the roof"
      },
      {
        question: "Under PD 957, the minimum clearance between a building and a street (front yard) for residential subdivisions is:",
        options: ["A) 3 meters", "B) 5 meters", "C) 7 meters", "D) 10 meters"],
        correct: "B) 5 meters"
      },
      {
        question: "In a subdivision project, according to PD 957, what is the minimum requirement for fire protection in each living unit?",
        options: [
          "A) Automatic sprinklers in all living units",
          "B) Fire extinguishers in the kitchen only",
          "C) Fireblocks and firewalls between adjoining units",
          "D) Fire alarms in common areas only"
        ],
        correct: "C) Fireblocks and firewalls between adjoining units"
      },
      {
        question: "Which of the following statements accurately describes the legal definition of a homeowners' association under Republic Act No. 9904?",
        options: [
          "A) It is a for-profit corporation organized by the government to manage subdivision developments.",
          "B) It is a nonstock, nonprofit corporation registered with the Housing and Land Use Regulatory Board (HLURB) or other applicable government bodies, formed by owners or purchasers of lots in subdivisions or other residential properties.",
          "C) It is a government-run organization that is responsible for providing basic community services to residents.",
          "D) It is a private real estate company that oversees the construction and sale of housing units in socialized housing projects."
        ],
        correct: "B) It is a nonstock, nonprofit corporation registered with the Housing and Land Use Regulatory Board (HLURB) or other applicable government bodies, formed by owners or purchasers of lots in subdivisions or other residential properties."
      },
      {
        question: "According to Republic Act No. 9904, which of the following is NOT considered a basic community service or facility that should be provided to homeowners?",
        options: [
          "A) Security services for the subdivision or residential area",
          "B) Regular street cleaning and maintenance",
          "C) Private swimming pools for homeowners",
          "D) Garbage collection and disposal services"
        ],
        correct: "C) Private swimming pools for homeowners"
      },
      {
        question: "What is the penalty for a person who intentionally violates any provision of the Magna Carta for Homeowners' Associations, according to Republic Act No. 9904?",
        options: [
          "A) A fine ranging from P1,000.00 to P10,000.00 and a warning",
          "B) A fine of P5,000.00 to P50,000.00, along with permanent disqualification from being elected or appointed to the board or as an officer of the association",
          "C) A prison sentence of 6 months to 2 years and disqualification from any community-related activities",
          "D) A fine of P1,000.00 and temporary suspension from association activities for 6 months"
        ],
        correct: "B) A fine of P5,000.00 to P50,000.00, along with permanent disqualification from being elected or appointed to the board or as an officer of the association"
      },
      {
        question: "The National Building Code of the Philippines:",
        options: ["A. RA 6541", "B. RA 6451", "C. RA 5641", "D. RA 6514"],
        correct: "A. RA 6541"
      },
      {
        question: "What is the primary purpose of the National Building Code of the Philippines (NBCP)?",
        options: [
          "A) To ensure the aesthetic appeal of buildings across the country",
          "B) To regulate the safety, health, and environmental impact of buildings",
          "C) To promote architectural styles and designs",
          "D) To increase the property value of buildings"
        ],
        correct: "B) To regulate the safety, health, and environmental impact of buildings"
      },
      {
        question: "According to the National Building Code, what is the minimum width of stairways in buildings?",
        options: ["A) 0.75 meters", "B) 1.10 meters", "C) 1.25 meters", "D) 1.50 meters"],
        correct: "B) 1.10 meters"
      },
      {
        question: "According to the National Building Code, the minimum floor-to-ceiling height in a condominium unit is:",
        options: ["A) 2.4 meters", "B) 2.7 meters", "C) 3.0 meters", "D) 3.5 meters"],
        correct: "B) 2.7 meters"
      },
      {
        question: "For habitable rooms, the height of floor to ceiling is",
        options: ["A. 2.7", "B. 2.0", "C. 2.4", "D. 2.8"],
        correct: "C. 2.4"
      },
      {
        question: "In condominium buildings, the National Building Code requires that fire exits should be located:",
        options: [
          "A) At the center of the building",
          "B) At both ends of each floor",
          "C) In the lobby area only",
          "D) At the rear of the building"
        ],
        correct: "B) At both ends of each floor"
      },
      {
        question: "What is the minimum width for an emergency exit in a condominium building under the National Building Code?",
        options: ["A) 0.6 meters", "B) 0.9 meters", "C) 1.2 meters", "D) 1.5 meters"],
        correct: "B) 0.9 meters"
      },
      {
        question: "According to the National Building Code, how many parking spaces should be provided in condominium buildings with more than 10 units?",
        options: [
          "A) 1 parking space per 2 units",
          "B) 1 parking space per 3 units",
          "C) 1 parking space per unit",
          "D) No requirement"
        ],
        correct: "B) 1 parking space per 3 units"
      },
      {
        question: "According to the National Building Code, how many fire exits are required for a condominium building with 6 floors?",
        options: ["A) 1 fire exit", "B) 2 fire exits", "C) 3 fire exits", "D) 4 fire exits"],
        correct: "B) 2 fire exits"
      },
      {
        question: "The National Building Code mandates that condominium buildings must have which of the following for accessibility?",
        options: [
          "A) A minimum of one elevator for buildings over 5 stories",
          "B) A wheelchair ramp for each unit",
          "C) At least two elevators for buildings over 5 stories",
          "D) No special accessibility requirements"
        ],
        correct: "A) A minimum of one elevator for buildings over 5 stories"
      },
      {
        question: "In the design of condominium buildings, the National Building Code requires that the building's structure must be capable of withstanding:",
        options: [
          "A) Earthquakes, wind, and fire",
          "B) Wind and rain",
          "C) Only earthquakes",
          "D) Flooding and rain"
        ],
        correct: "A) Earthquakes, wind, and fire"
      },
      {
        question: "According to the National Building Code, the number of stairways in a condominium building must comply with which of the following?",
        options: [
          "A) The height of the building",
          "B) The number of parking spaces",
          "C) The number of units",
          "D) The building's floor area"
        ],
        correct: "A) The height of the building"
      },
      {
        question: "The National Building Code requires that fire-resistant materials be used in the construction of condominium buildings. Which of the following is NOT typically a fire-resistant material?",
        options: ["A) Concrete", "B) Steel", "C) Wood", "D) Brick"],
        correct: "C) Wood"
      },
      {
        question: "As per the rule, windows that will be used for rooms or any habitation will be how many percent at least, of the floor area of the room",
        options: ["A. 15%", "B. 10%", "C. 20%", "D. 25%"],
        correct: "B. 10%"
      },
      {
        question: "For inner courts, passage way must be provided on it with a minimum width of",
        options: ["A. 2.7", "B. 2.0", "C. 1.8", "D. 1.2"],
        correct: "D. 1.2"
      },
      {
        question: "For circular staircase what will be the minimum run in the narrower end of the step",
        options: ["A. 250mm", "B. 300mm", "C. 200mm", "D. 400mm"],
        correct: "C. 200mm"
      },
      {
        question: "In a stair, the headroom clearance will be",
        options: ["A. 3 meters", "B. 3.5 meters", "C. 2 meters", "D. 2.5 meters"],
        correct: "C. 2 meters"
      },
      {
        question: "Under R.A. No. 7279, the following are considered Professional Squatters:",
        options: [
          "i, ii, iii and iv",
          "i and ii only",
          "i, iii, and iv only",
          "d. ii and iii only"
        ],
        correct: "i, iii, and iv only"
      },
      {
        question: "The Urban Development and Housing Act shall cover all lands in urban and urbanizable areas, including:",
        options: [
          "a. all of the above",
          "b. i, ii, iii, and iv only",
          "c. i, ii, iii, and v only",
          "d. i, ii, iii, and vi only"
        ],
        correct: "a. all of the above"
      },
      {
        question: "Under R.A. No. 7279, the modes of acquiring lands shall include, among others:",
        options: [
          "a. all of the above",
          "b. i, ii, iii, iv and vi only",
          "c. i, ii, iii, iv and vii only",
          "d. All except viii"
        ],
        correct: "a. all of the above"
      },
      {
        question: "It is a modified system under the UHLP whereby housing loans may be extended through other conduits like banks:",
        options: [
          "A. Turn-key Loan",
          "B. Multi-window Lending Program",
          "C. Project Loan",
          "D. Construction Loan"
        ],
        correct: "B. Multi-window Lending Program"
      },
      {
        question: "What is the minimum percentage of the condominium area or project cost that must be allocated for socialized housing under the Program?",
        options: ["a) 10%", "b) 15%", "c) 20%", "d) 5%"],
        correct: "d) 5%"
      },
      {
        question: "What penalty is imposed on a person found guilty of violating any provision of the Balanced Housing Development Program for the third offense?",
        options: [
          "a) Fine of not less than P500,000",
          "b) Suspension of business license for 3 to 6 months",
          "c) Cancellation of business license",
          "d) Warning and probation"
        ],
        correct: "c) Cancellation of business license"
      },
      {
        question: "It is the lead government agencies tasked to develop and implement social housing program for low-income groups in the formal and informal sectors, esp. the underprivilege and homeless.",
        options: ["A. CMP", "B. SHFC", "C. HDMF", "D. DHSUD"],
        correct: "B. SHFC"
      },
      {
        question: "Sheena orally agreed to sell her condominium unit in Shell Residences to Lyca. Later on, Sheena refused to sell the said unit to Lyca as she is no longer interested to sell it. Lyca sued Sheena. In this case, the agreement wherein Sheena will sell her condo unit to Lyca is since it is not made in writing.",
        options: ["A. Unenforceable", "B. Void", "C. Voidabe", "D. Rescissible"],
        correct: "A. Unenforceable"
      },
      {
        question: "DDD Corporation will sell its parcel of land in Cavite. The sale must be accompanied by the following for purposes of the person signing for the corporation",
        options: [
          "A. Corporate secretary resolution",
          "B. Affidavit of authority",
          "C. Corporate secretary's certificate",
          "D. Letter of authority"
        ],
        correct: "C. Corporate secretary's certificate"
      },
      {
        question: "The Philippine's titling system is based on the Torren's system developed by a person from -",
        options: [
          "A. Spanish colonial government",
          "B. Australia",
          "C. American government",
          "D. Commonwealth government"
        ],
        correct: "B. Australia"
      },
      {
        question: "It refers to a proceeding in rem initiated by the filing of a petition for registration by the government and not by the person claiming ownership of the land but the latter is compelled to make known his",
        options: [
          "A. Ordinary Land Registration",
          "B. Judicial Registration",
          "C. Administrative Registration",
          "D. Cadastral Registration"
        ],
        correct: "D. Cadastral Registration"
      },
      {
        question: "What is the difference between Reconstitution of Title and Reissuance of Title? In case of loss or theft of an owner's copy of title, the owner may undertake the following and file",
        options: [
          "A. Complaint for issuance of title",
          "B. Petition for re-issuance of duplicate owner's certificate of title",
          "C. Affidavit for issuance of duplicate owner's certificate of title",
          "D. Request for issuance of duplicate of copy from Register of Deeds"
        ],
        correct: "B. Petition for re-issuance of duplicate owner's certificate of title"
      },
      {
        question: "Administrative Reconstitution of Certificate of Title can be done if –",
        options: [
          "A. When there is substantial loss or destruction of the original land titles due to fire, flood, or other force majeure as determined by the Office of the President",
          "B. The number of certificates of title lost or damaged should be at least 10% of the total number in the possession of the Office of the Register of Deeds",
          "C. Lands acquired under free patent or homestead patent cannot be alienated or encumbered within a period of 10 years from its issuance",
          "D. It is an ordinary civil remedy"
        ],
        correct: "B. The number of certificates of title lost or damaged should be at least 10% of the total number in the possession of the Office of the Register of Deeds"
      },
      {
        question: "Quieting of Title means -",
        options: [
          "A. To ban the Owner from obtaining a copy of the property's title",
          "B. To bring to court an action involving a question of ownership or rights to a property",
          "C. To cancel the title of the property",
          "D. To apply for a new title to replace that which was lost"
        ],
        correct: "B. To bring to court an action involving a question of ownership or rights to a property"
      },
      {
        question: "The buyer was abroad and was buying a condo in Taguig City from the owner. To be able to sell without requiring the buyer to be present, the following may be executed by the seller",
        options: [
          "A. Bilateral deed of sale",
          "B. Special power of attorney",
          "C. Unilateral deed of sale",
          "D. Affidavit of Sale"
        ],
        correct: "C. Unilateral deed of sale"
      },
      {
        question: "In case of registration of deed of extrajudicial settlement, the Register of Deeds shall annotate the lien mentioned in",
        options: ["A. Sec. 4 Rule 76", "B. Sec. 7 Rule 74", "C. Sec. 4 Rule 74", "D. Sec. 6 Rule 74"],
        correct: "C. Sec. 4 Rule 74"
      },
      {
        question: "To cancel the lien based on Rule 74 any of the heirs may file a",
        options: [
          "A. Verified complain",
          "B. Notice of cancellation",
          "C. Verified petition for removal of heir's lien",
          "D. Deed of cancellation signed by all heir"
        ],
        correct: "C. Verified petition for removal of heir's lien"
      },
      {
        question: "What document is issued by the Land Registration Authority (LRA) that proves ownership of land in the Philippines?",
        options: [
          "A) Transfer Certificate of Title (TCT)",
          "B) Deed of Absolute Sale",
          "C) Certificate of Land Title",
          "D) Property Tax Declaration"
        ],
        correct: "A) Transfer Certificate of Title (TCT)"
      },
      {
        question: "What is the main purpose of the Deed of Absolute Sale?",
        options: [
          "A) To transfer the ownership of real estate from the seller to the buyer",
          "B) To register a land title with the Land Registration Authority",
          "C) To apply for a mortgage loan",
          "D) To confirm the payment of taxes for the property"
        ],
        correct: "A) To transfer the ownership of real estate from the seller to the buyer"
      },
      {
        question: "The Certificate of Land Title issued by the Land Registration Authority (LRA) is primarily used for which of the following?",
        options: [
          "A) Showing that a property is registered under a particular person's name",
          "B) Paying real property taxes",
          "C) Submitting a building permit application",
          "D) Applying for a mortgage loan"
        ],
        correct: "A) Showing that a property is registered under a particular person's name"
      },
      {
        question: "What is required to transfer the title of a property in the Philippines?",
        options: [
          "A) A notarized Deed of Sale and payment of documentary stamp tax",
          "B) A special power of attorney from the buyer",
          "C) The property's tax declaration",
          "D) A land surveyor's report"
        ],
        correct: "A) A notarized Deed of Sale and payment of documentary stamp tax"
      },
      {
        question: "What is the function of the Land Registration Authority (LRA)?",
        options: [
          "A) To assess property taxes",
          "B) Act as central repository of records of land titles",
          "C) To determine the market value of properties",
          "D) To approve subdivision development plans"
        ],
        correct: "B) Act as central repository of records of land titles"
      },
      {
        question: "What is the role of the Register of Deeds in the Philippines?",
        options: [
          "A) To process applications for real estate loans",
          "B) To maintain and issue certified copies of land titles and deeds",
          "C) To assess the market value of properties",
          "D) To approve building permits and zoning applications"
        ],
        correct: "B) To maintain and issue certified copies of land titles and deeds"
      },
      {
        question: "What document serves as proof of ownership for a condominium unit in the Philippines?",
        options: [
          "A) Condominium Certificate of Title (CCT)",
          "B) Transfer Certificate of Title (TCT)",
          "C) Deed of Absolute Sale",
          "D) Tax Declaration"
        ],
        correct: "A) Condominium Certificate of Title (CCT)"
      },
      {
        question: "What is the Affidavit of Adverse Claim used for in real estate transactions?",
        options: [
          "A) To contest the validity of a land title",
          "B) To claim ownership over a property based on continuous possession",
          "C) To prove a buyer's ability to pay for a property",
          "D) To declare the property as tax-exempt"
        ],
        correct: "B) To claim ownership over a property based on continuous possession"
      },
      {
        question: "What is required to obtain a Transfer Certificate of Title (TCT) after purchasing a property?",
        options: [
          "A) Only a signed Deed of Sale",
          "B) A Deed of Sale, payment of documentary stamp tax, capital gains tax and transfer tax, and registration with the Register of Deeds",
          "C) A land survey and a proof of income",
          "D) A deed of assignment and property tax receipts"
        ],
        correct: "B) A Deed of Sale, payment of documentary stamp tax, capital gains tax and transfer tax, and registration with the Register of Deeds"
      },
      {
        question: "What is title encumbrance in the context of real estate?",
        options: [
          "A) A record of ownership transfer",
          "B) A claim or lien on the property that affects its ownership",
          "C) The process of registration with the LRA",
          "D) A tax assessment on the property"
        ],
        correct: "B) A claim or lien on the property that affects its ownership"
      },
      {
        question: "What is Real Property Tax Declaration used for?",
        options: [
          "A) To establish the legal title to a property",
          "B) To assess the amount of tax to be paid by the owner",
          "C) To transfer ownership of a property",
          "D) To transfer land titles"
        ],
        correct: "B) To assess the amount of tax to be paid by the owner"
      },
      {
        question: "What is reconstitution of title?",
        options: [
          "A) The process of transferring property ownership",
          "B) The process of recovering a lost or destroyed land title",
          "C) The process of re-registering a property after ownership changes",
          "D) The process of converting agricultural land to residential use"
        ],
        correct: "B) The process of recovering a lost or destroyed land title"
      },
      {
        question: "What is the purpose of Notarization in the sale of real estate?",
        options: [
          "A) To make the document registrable",
          "B) To verify the ownership of the property",
          "C) To guarantee payment of the sale price",
          "D) To assess the market value of the property"
        ],
        correct: "A) To make the document registrable"
      },
      {
        question: "What document is issued after the payment of the Capital Gains Tax in a property sale?",
        options: [
          "A) Title Certificate",
          "B) Electronic Certificate of Registration",
          "C) Transfer Certificate of Title",
          "D) Taxpayer's Acknowledgment Receipt"
        ],
        correct: "B) Electronic Certificate of Registration"
      },
      {
        question: "What is required for the reissuance of a lost title?",
        options: [
          "A) A sworn affidavit stating the loss",
          "B) A sale contract with notarization",
          "C) Payment of real property tax for the previous year",
          "D) Payment of capital gains tax"
        ],
        correct: "A) A sworn affidavit stating the loss"
      },
      {
        question: "What is the Deed of Assignment used for?",
        options: [
          "A) To transfer the rights of a mortgaged property from one person to another",
          "B) To settle a property's debts with a third-party",
          "C) To indicate the buyer's intent to purchase a property",
          "D) To show ownership of a condominium unit"
        ],
        correct: "A) To transfer the rights of a mortgaged property from one person to another"
      },
      {
        question: "What is the Significance of the Tax Clearance in real estate transactions?",
        options: [
          "A) It confirms that the seller has paid all taxes due to the government",
          "B) It allows the buyer to transfer the title to their name",
          "C) It shows that the property is free from any encumbrances",
          "D) It confirms that the property meets building code standards"
        ],
        correct: "A) It confirms that the seller has paid all taxes due to the government"
      },
      {
        question: "What document is required for land registration if a property was acquired through inheritance?",
        options: [
          "A) Tax Declaration",
          "B) Deed of Extra-judicial Settlement of Estate",
          "C) Court Order of Transfer",
          "D) Deed of Sale"
        ],
        correct: "B) Deed of Extra-judicial Settlement of Estate"
      },
      {
        question: "What does the Deed of Donation represent in real estate?",
        options: [
          "A) The transfer of property as a gift without monetary exchange",
          "B) The mortgage agreement for a real estate loan",
          "C) A loan contract used in purchasing property",
          "D) The agreement for rental payments"
        ],
        correct: "A) The transfer of property as a gift without monetary exchange"
      },
      {
        question: "What document is required to complete the subdivision registration process?",
        options: [
          "A) Tax Declaration",
          "B) Survey Plan",
          "C) Certificate of Title",
          "D) Property Development Plan"
        ],
        correct: "B) Survey Plan"
      },
      {
        question: "What does a 'Notice of Lis Pendens' indicate in real estate?",
        options: [
          "A) The property has an ongoing legal dispute or case",
          "B) The property has been sold to a new owner",
          "C) The property is free of any encumbrances",
          "D) The taxes have been fully paid for the property"
        ],
        correct: "A) The property has an ongoing legal dispute or case"
      },
      {
        question: "The minor to purchase a condominium unit, it is required that",
        options: [
          "A. The minor be at least 15 years old",
          "B. The minor be represented by the legal guardian",
          "C. There must be court approval",
          "D. There must be consent of the parents"
        ],
        correct: "B. The minor be represented by the legal guardian"
      },
      {
        question: "Baste sold a property to Sandro in July 2024. Baste later sold the property to Kitty in September of the same year. Who has the right to own the property?",
        options: [
          "a. Kitty who first registered to the registry of deeds",
          "b. Sandro who has the oldest document available",
          "c. Sandro who took first possession of the property",
          "d. Kitty who has a tax declaration"
        ],
        correct: "a. Kitty who first registered to the registry of deeds"
      },
      {
        question: "A buyer of real estate has already paid in 8 years of installment a total amount of P520,000.00 inclusive of P20,000.00 penalty interest. The cash surrender value of the property based on Maceda Law is:",
        options: [
          "A. P200,000.00",
          "B. P325,000.00",
          "C. P250,000.00",
          "D. None of the above"
        ],
        correct: "B. P325,000.00"
      },
      {
        question: "A buyer who has been paying monthly installments of PhP 12,500 for 8 years and 3 months decided to quit. How much is the cash surrender value?",
        options: [
          "A. PhP 600,000",
          "B. PhP 618,750",
          "C. PhP 804,375",
          "D. PhP 819,843"
        ],
        correct: "C. PhP 804,375"
      },
      {
        question: "Juan, a minor, enters into a contract of sale to purchase a piece of land in Batangas from Pedro, a legal adult. What is the effect?",
        options: [
          "a. The contract is void.",
          "b. The contract is voidable.",
          "c. The contract is unenforceable.",
          "d. The contract is valid and enforceable."
        ],
        correct: "b. The contract is voidable."
      },
      {
        question: "Ana, a 20-year-old, purchases a piece of real estate property from Mark, but after one year of payments, she defaults payment. The seller cancels the contract and demands cancellation and repossession. The contract was signed by both parties but was not notarized. What is the status of the contract of sale?",
        options: [
          "a. The contract is void and unenforceable.",
          "b. The contract is valid but not registrable.",
          "c. The contract is voidable.",
          "d. The contract is invalid because it was not notarized."
        ],
        correct: "b. The contract is valid but not registrable."
      },
      {
        question: "Samantha buys a piece of real property from David who is not the registered owner of the property. David does not have any written authorization to sell the property on behalf of the owner. What is the effect if the contract of sale?",
        options: [
          "a. The contract is valid and binding.",
          "b. The contract is voidable and can be annulled.",
          "c. The contract is unenforceable.",
          "d. The contract is automatically void."
        ],
        correct: "c. The contract is unenforceable."
      },
      {
        question: "Ricky sells his property to Maria but later realizes he is not the legal owner of the land at the time of the sale. He acquires legal ownership of the property a month after the sale. Will the contract of sale between Ricky and Maria be valid?",
        options: [
          "a. Yes, the contract is valid because Ricky eventually obtained ownership.",
          "b. No, the contract is voidable because Ricky was not the legal owner.",
          "c. Yes, the contract is valid and ownership will transfer by operation of law once Ricky owns the property.",
          "d. No, the contract is void because Ricky did not own the property at the time of the sale."
        ],
        correct: "c. Yes, the contract is valid and ownership will transfer by operation of law once Ricky owns the property."
      },
      {
        question: "Carlos, a seller, agrees to sell his land to Lisa. Lisa pays earnest money of PHP 50,000 as proof of her good faith and intent to proceed with the purchase of the property. After a month, Lisa decides not to continue the transaction. What is the purpose of the earnest money paid by Lisa?",
        options: [
          "a. It is a down payment towards the purchase price.",
          "b. It serves as a security deposit for the property.",
          "c. It demonstrates Lisa's commitment and intent to complete the transaction.",
          "d. It is a non-refundable fee for administrative purposes."
        ],
        correct: "c. It demonstrates Lisa's commitment and intent to complete the transaction."
      },
      {
        question: "Victor sold his residential property to Clara in an installment sale agreement. After making only 18 months of installment payments, Clara decides to stop paying and defaults on the contract. According to the Maceda Law, what are Clara's rights regarding the cancellation of the contract?",
        options: [
          "a. Clara is entitled to a full refund of all the payments made.",
          "b. Clara is entitled to a grace period but not entitled to a refund of the cash surrender value.",
          "c. Clara must pay all the remaining installments before canceling the contract.",
          "d. None of the above"
        ],
        correct: "b. Clara is entitled to a grace period but not entitled to a refund of the cash surrender value."
      },
      {
        question: "Martin sold his condominium unit to Sam in a double sale. Martin first sold the unit to Sam and later sold it to Tanya, who registered the sale with the Registry of Deeds before Sam did. Who has the right to the property?",
        options: [
          "a. Sam, who paid first but did not register the sale.",
          "b. Tanya, who registered the sale first and acted in good faith.",
          "c. Martin, who sold the property twice.",
          "d. Sam, since he was the first buyer."
        ],
        correct: "b. Tanya, who registered the sale first and acted in good faith."
      },
      {
        question: "What is the primary requirement for a principal to be bound by the acts of their agent?",
        options: [
          "a. The agent must act with complete independence.",
          "b. The agent must act within the scope of their authority and on behalf of the principal.",
          "c. The agent must act in their personal capacity and not on behalf of the principal.",
          "d. The agent must act only in the best interest of themselves."
        ],
        correct: "b. The agent must act within the scope of their authority and on behalf of the principal."
      },
      {
        question: "When is a special power of attorney (SPA) required in real estate transactions?",
        options: [
          "a. When the agent is authorized to manage the principal's business.",
          "b. When the agent enters into any contract that involves the sale, lease, or creation of real rights over immovable property.",
          "c. When the agent is performing an administrative task such as managing assets.",
          "d. When the agent borrows money for the principal's business."
        ],
        correct: "b. When the agent enters into any contract that involves the sale, lease, or creation of real rights over immovable property."
      },
      {
        question: "Which of the following is true regarding the notarization of a special power of attorney (SPA) in a sale of real property?",
        options: [
          "a. A SPA must always be notarized to be valid in a real estate transaction.",
          "b. A SPA involving the sale of real property is valid without notarization if executed in the Philippines.",
          "c. A SPA is valid only if it is executed by a notary public.",
          "d. A SPA must be notarized, even if executed outside the Philippines, for it to be valid."
        ],
        correct: "b. A SPA involving the sale of real property is valid without notarization if executed in the Philippines."
      },
      {
        question: "What does 'agency coupled with interest' mean?",
        options: [
          "a. The agent has a personal interest in the transaction beyond their agency contract.",
          "b. The agent must act without any personal interest in the transaction.",
          "c. The agent cannot participate in any profits from the transaction.",
          "d. The agent is acting solely in the interest of the principal, with no benefits to themselves."
        ],
        correct: "a. The agent has a personal interest in the transaction beyond their agency contract."
      },
      {
        question: "Jonas owns a property and authorizes his cousin Mark to sell it. The contract of sale between Mark and the buyer is signed, but Mark's authority was not stated in writing. The buyer proceeds with the purchase. Will the sale made by Mark be valid?",
        options: [
          "a. Yes, as long as Mark is a trusted relative.",
          "b. No, the sale is void because Mark's authority was not in writing.",
          "c. Yes, because verbal authority is enough in real estate transactions.",
          "d. No, because the buyer is not directly related to Jonas."
        ],
        correct: "b. No, the sale is void because Mark's authority was not in writing."
      },
      {
        question: "In a property sale, Julia authorizes her agent to lease the property to a tenant for a period of two years. However, the agent decides to lease the property to a tenant for five years without getting a special power of attorney. Is the agent's action valid?",
        options: [
          "a. Yes, the agent can lease the property for up to five years.",
          "b. No, the agent can only lease the property for up to one year without a special power of attorney.",
          "c. No, the agent needs a special power of attorney to lease the property for more than one year.",
          "d. Yes, the agent can lease the property without restrictions."
        ],
        correct: "c. No, the agent needs a special power of attorney to lease the property for more than one year."
      },
      {
        question: "Samantha appointed her niece, Lisa, to act on her behalf in managing her real estate. After two years, Samantha decides she no longer needs Lisa's assistance and revokes the agency. Lisa is informed and ceases her management of the property. Which of the following best explains how the agency was extinguished?",
        options: [
          "a. By the expiration of the agency contract.",
          "b. By the revocation of the principal.",
          "c. By mutual agreement between Samantha and Lisa.",
          "d. By Lisa's withdrawal from the agency."
        ],
        correct: "b. By the revocation of the principal."
      },
      {
        question: "What is the definition of a real estate mortgage?",
        options: [
          "a. A contract where the debtor borrows money from the creditor.",
          "b. A contract where the debtor secures the fulfillment of a principal obligation by subjecting immovable property to the creditor's claim.",
          "c. A contract where the debtor transfers ownership of the property to the creditor.",
          "d. A contract where the property is exchanged for goods or services."
        ],
        correct: "b. A contract where the debtor secures the fulfillment of a principal obligation by subjecting immovable property to the creditor's claim."
      },
      {
        question: "When is a mortgage contract perfected?",
        options: [
          "a. When the mortgagor agrees to the terms.",
          "b. When the loan is granted by the creditor.",
          "c. When the thing mortgaged is delivered.",
          "d. When the contract is notarized."
        ],
        correct: "c. When the thing mortgaged is delivered."
      },
      {
        question: "Maria wants to borrow PHP 500,000 from Bank XYZ to start a business and offers a piece of land as collateral. However, she is only a tenant and does not own the land. Can she legally mortgage the property?",
        options: [
          "a. Yes, as long as she has a lease agreement.",
          "b. No, because the mortgagor must be the absolute owner of the property.",
          "c. Yes, she can mortgage the property under her leasehold rights.",
          "d. No, the property can only be mortgaged with the landlord's consent."
        ],
        correct: "b. No, because the mortgagor must be the absolute owner of the property."
      },
      {
        question: "What is the difference between a voluntary mortgage and a legal mortgage?",
        options: [
          "a. A voluntary mortgage is required by law, while a legal mortgage is agreed upon by both parties.",
          "b. A voluntary mortgage is agreed upon by both parties, while a legal mortgage is required by law.",
          "c. A voluntary mortgage involves an immovable property, while a legal mortgage does not.",
          "d. There is no difference between the two."
        ],
        correct: "b. A voluntary mortgage is agreed upon by both parties, while a legal mortgage is required by law."
      },
      {
        question: "What is an 'open mortgage'?",
        options: [
          "a. A mortgage that cannot be paid off before its maturity date.",
          "b. A mortgage where the mortgagor can borrow additional money after the loan has reduced.",
          "c. A mortgage that can be paid off at any time even before its maturity date.",
          "d. A mortgage that is not recorded in public records."
        ],
        correct: "c. A mortgage that can be paid off at any time even before its maturity date."
      },
      {
        question: "Which of the following best describes an 'equitable mortgage'?",
        options: [
          "a. A mortgage with all the proper formalities completed.",
          "b. A mortgage that reveals the intention to burden real property as security, but lacks formalities.",
          "c. A mortgage that requires court approval.",
          "d. A mortgage with a dragnet clause included."
        ],
        correct: "b. A mortgage that reveals the intention to burden real property as security, but lacks formalities."
      },
      {
        question: "What does the 'doctrine of mortgage in good faith' mean?",
        options: [
          "a. A mortgagee must verify the mortgagor's title before accepting the property as collateral.",
          "b. A mortgagee can rely on the mortgagor's certificate of title in good faith, without further investigation, unless there are signs of suspicion.",
          "c. A mortgagee must always perform an in-depth investigation into the mortgagor's title.",
          "d. A mortgagee can only act in good faith if they are familiar with the mortgagor personally."
        ],
        correct: "b. A mortgagee can rely on the mortgagor's certificate of title in good faith, without further investigation, unless there are signs of suspicion."
      },
      {
        question: "What is a 'dragnet clause' in a mortgage agreement?",
        options: [
          "a. A clause that allows the lender to call in the full loan amount at any time.",
          "b. A clause that allows the mortgage to cover future loans or debts incurred by the borrower with the same lender, using the same property as collateral.",
          "c. A clause that automatically cancels the mortgage after a certain number of years.",
          "d. A clause that allows the mortgagor to sell the property without consent from the lender."
        ],
        correct: "b. A clause that allows the mortgage to cover future loans or debts incurred by the borrower with the same lender, using the same property as collateral."
      },
      {
        question: "Which of the following is a remedy available to the mortgagee if the mortgagor fails to meet the obligations within the agreed period?",
        options: [
          "a. Reduction of the interest rate.",
          "b. Foreclosure of the property.",
          "c. Cancellation of the contract.",
          "d. Payment of a penalty fee."
        ],
        correct: "b. Foreclosure of the property."
      },
      {
        question: "What is an 'extrajudicial foreclosure'?",
        options: [
          "a. A foreclosure process carried out through the court system.",
          "b. A process where the lender forecloses on the property without court proceedings, as outlined by Act No. 3135.",
          "c. A process where the lender hires a third-party company to foreclose the property.",
          "d. A process that applies only to personal property."
        ],
        correct: "b. A process where the lender forecloses on the property without court proceedings, as outlined by Act No. 3135."
      },
      {
        question: "John borrows PHP 500,000 from a bank to buy a house. He uses the property as collateral for the loan and signs an open mortgage agreement. After making consistent monthly payments, John decides to pay off the mortgage in full a few years before the agreed maturity date. What type of mortgage does John have?",
        options: [
          "a. Open-end mortgage",
          "b. Open mortgage",
          "c. Legal mortgage",
          "d. Equitable mortgage"
        ],
        correct: "b. Open mortgage"
      },
      {
        question: "It is one whereby the owner leases his property to the lessee buyer with the privilege to exercise the right to buy thereof at a specific date at an agreed price and the agreed rental may be considered as part at the purchase price when the lessee-buyer exercise the option.",
        options: [
          "A. Purchase Agency",
          "B. Lease with Option to Buy",
          "C. Real estate Mortgage",
          "D. Contract of Lease"
        ],
        correct: "B. Lease with Option to Buy"
      }
    ],
  },
  {
    id: "part3",
    title: "Part 3 - Professional Practice",
    questions: [
      {
        question: "The law which sets the broker's commission to $3-5% is:",
        options: [
          "A. RA 9646",
          "B. PD 957",
          "C. IRR of RA 9646",
          "D. No law establishing fixed commission rate",
        ],
        correct: "D. No law establishing fixed commission rate",
      },
      {
        question: "An agreement where the authorized broker allows cooperating broker to sell the property with stipulation on the sharing of commission is referred to as:",
        options: [
          "A. Authority to Sell",
          "B. Extension of Authority",
          "C. Contract to Sell",
          "D. Exclusive Authority",
        ],
        correct: "B. Extension of Authority",
      },
      {
        question: "Which section in R.A. 9646 defines REAL ESTATE BROKER?",
        options: [
          "A. Section 2.g",
          "B. Section 3.g",
          "C. Section 5.b",
          "D. Section 6.c",
        ],
        correct: "B. Section 3.g",
      },
      {
        question: "Which section in R.A. 9646 allows corporate practice of the real estate service profession?",
        options: [
          "A. Section 30",
          "B. Section 32",
          "C. Section 25",
          "D. Section 40",
        ],
        correct: "B. Section 32",
      },
      {
        question: "When does the license of a real estate broker expire?",
        options: [
          "A. Every year",
          "B. Every three years",
          "C. Every five years",
          "D. Every two years",
        ],
        correct: "B. Every three years",
      },
      {
        question: "How much is the bond required to be filed by a real estate broker?",
        options: [
          "A. PHP 10,000 with PRC",
          "B. PHP 50,000 with DHSUD",
          "C. PHP 20,000 with PRC and PHP 5,000 with DHSUD",
          "D. PHP 25,000 with DHSUD",
        ],
        correct: "C. PHP 20,000 with PRC and PHP 5,000 with DHSUD",
      },
      {
        question: "What is the minimum credit units required for renewal of the accreditation of the real estate salesperson with the PRC?",
        options: [
          "A. 5 units",
          "B. 10 units",
          "C. 15 units",
          "D. 20 units",
        ],
        correct: "B. 10 units",
      },
      {
        question: "A real estate broker who renewed his license and is registered to engage in project selling is called?",
        options: [
          "A. DHSUD registered broker",
          "B. PRC licensed and DHSUD registered real estate broker",
          "C. Accredited real estate broker",
          "D. Licensed project-selling broker",
        ],
        correct: "B. PRC licensed and DHSUD registered real estate broker",
      },
      {
        question: "What is the term used for the series of events or actions that directly lead to the successful sale or transaction of a property?",
        options: [
          "A. Exclusive Listing",
          "B. Procuring Cause",
          "C. Sales Agency",
          "D. Purchase Agency",
        ],
        correct: "B. Procuring Cause",
      },
      {
        question: "What is the required action for a real estate broker to be entitled to a commission?",
        options: [
          "A. They must find a seller",
          "B. They must find a buyer who actually purchases the property",
          "C. They must create a listing",
          "D. They must negotiate the sale but not necessarily find a buyer",
        ],
        correct: "B. They must find a buyer who actually purchases the property",
      },
      {
        question: "In which case is a real estate broker entitled to a commission, even if the sale was closed after the broker's authority expired?",
        options: [
          "A. In the case of a 'Hold Over Clause'",
          "B. In the case of a Non-Exclusive Listing",
          "C. In the case of an Exclusive Listing",
          "D. In the case of a Multiple Listing",
        ],
        correct: "A. In the case of a 'Hold Over Clause'",
      },
      {
        question: "Who is responsible for paying the commission in a sales agency?",
        options: [
          "A. The buyer",
          "B. The seller",
          "C. The broker",
          "D. The escrow agent",
        ],
        correct: "B. The seller",
      },
      {
        question: "Which type of listing allows only one broker to negotiate the sale of a property?",
        options: [
          "A. Open Listing",
          "B. Exclusive Listing",
          "C. Multiple Listing",
          "D. Project-Selling Listing",
        ],
        correct: "B. Exclusive Listing",
      },
      {
        question: "What is an escrow in a real estate transaction?",
        options: [
          "A. An agreement to transfer property ownership",
          "B. A contract to assign a lease",
          "C. An agreement where consideration is entrusted to a third party for fulfillment of conditions",
          "D. A listing agreement with a broker",
        ],
        correct: "C. An agreement where consideration is entrusted to a third party for fulfillment of conditions",
      },
      {
        question: "Under the Real Estate Service Act (R.A. 9646), who is allowed to practice real estate brokerage?",
        options: [
          "A. A natural person only",
          "B. A corporation or a partnership only",
          "C. A natural person, corporation, or partnership",
          "D. Only a licensed architect",
        ],
        correct: "C. A natural person, corporation, or partnership",
      },
      {
        question: "The application of economic techniques to real estate markets which tries to describe, explain, and predict patterns of prices, supply, and demand is called:",
        options: [
          "A. Economics",
          "B. Real Estate Economics",
          "C. Economics & Finance",
          "D. Real Estate Finance",
        ],
        correct: "B. Real Estate Economics",
      },
      {
        question: "The theory that each incremental item becomes less expensive as the volume is increased:",
        options: [
          "A. Efficiency",
          "B. Economies of scale",
          "C. Profit",
          "D. Marginal",
        ],
        correct: "B. Economies of scale",
      },
      {
        question: "In a high demand market, the cost of building a new property will increase substantially until:",
        options: [
          "A. It becomes impossible for prices to go higher",
          "B. The supply increases because new builders get into the market",
          "C. The charges from suppliers and subcontractors go down",
          "D. The BSP increases interest rates",
        ],
        correct: "B. The supply increases because new builders get into the market",
      },
      {
        question: "When demand for housing increases, the supply:",
        options: [
          "A. Increases immediately",
          "B. Increases slowly",
          "C. Is unaffected",
          "D. Will diminish",
        ],
        correct: "B. Increases slowly",
      },
      {
        question: "All of the following are characteristics of a real estate market except:",
        options: [
          "A. Land is indestructible",
          "B. Land is immobile",
          "C. The market rapidly adjusts to changes in supply and demand",
          "D. Government controls play an important role when compared to other markets",
        ],
        correct: "C. The market rapidly adjusts to changes in supply and demand",
      },
      {
        question: "Demand for real estate may be affected by:",
        options: [
          "A. Increasing population and employment",
          "B. Availability of mortgage financing",
          "C. Increases in purchasing power",
          "D. All of the above",
        ],
        correct: "D. All of the above",
      },
      {
        question: "Two homes in the same subdivision, have the same amenities, size, features, and location. One is priced at P1,000,000 and the other is priced at P1,100,000:",
        options: [
          "A. The lower-priced home will sell quickly",
          "B. The lower-priced home will attract more demand",
          "C. The lower-priced home will get more showings",
          "D. The lower-priced home will sell for the full list price",
        ],
        correct: "B. The lower-priced home will attract more demand",
      },
      {
        question: "When demand for housing increases, the supply (repeated):",
        options: [
          "A. Increases immediately",
          "B. Increases slowly",
          "C. Is unaffected",
          "D. Will diminish",
        ],
        correct: "B. Increases slowly",
      },
      {
        question: "Overproduction of new homes:",
        options: [
          "A. Causes oversupply and lower prices",
          "B. Causes increases in demand",
          "C. Causes prices to increase",
          "D. Causes the market to move toward a state of equilibrium",
        ],
        correct: "A. Causes oversupply and lower prices",
      },
      {
        question: "What two components comprise effective demand?",
        options: [
          "A. Cost and value",
          "B. Desire and purchasing power",
          "C. Desire and need",
          "D. Desire and satisfaction",
        ],
        correct: "B. Desire and purchasing power",
      },
      {
        question: "The desirability of the economic utility of the property is known as:",
        options: [
          "A. Economic Utility",
          "B. Economic Life",
          "C. Economic Value",
          "D. Economic Obsolescence",
        ],
        correct: "C. Economic Value",
      },
      {
        question: "The government's taxation power can be utilized to encourage or discourage real estate development... This government policy is referred to as:",
        options: [
          "A. Political Policy",
          "B. Fiscal Policy",
          "C. Monetary Policy",
          "D. Budgetary Policy",
        ],
        correct: "B. Fiscal Policy",
      },
      {
        question: "The economic base is:",
        options: [
          "A. The lower line in a graph showing the economy of a community",
          "B. The ratio of basic industries to technical Industries in a community",
          "C. An inexpensive, large string instrument",
          "D. The economic activity that enables it to attract income from outside its borders",
        ],
        correct: "D. The economic activity that enables it to attract income from outside its borders",
      },
      {
        question: "What does Real Estate Economics primarily study?",
        options: [
          "A) The legal aspects of real estate",
          "B) The financial mechanisms involved in real estate",
          "C) The relationship between real estate markets and economic factors",
          "D) The architectural design of buildings",
        ],
        correct: "C) The relationship between real estate markets and economic factors",
      },
      {
        question: "Which of the following is a primary factor that influences real estate prices?",
        options: [
          "A) Weather conditions",
          "B) Economic cycles",
          "C) Personal taste of buyers",
          "D) Technology advancements",
        ],
        correct: "B) Economic cycles",
      },
      {
        question: "Which of the following is a macro-economic factor influencing the real estate market?",
        options: [
          "A) Local zoning regulations",
          "B) National inflation rates",
          "C) Property-specific features",
          "D) Homeowners' association rules",
        ],
        correct: "B) National inflation rates",
      },
      {
        question: "Which of the following is a micro-economic factor that impacts the real estate market?",
        options: [
          "A) National GDP growth",
          "B) Federal reserve policies",
          "C) Local employment rates",
          "D) Interest rates on government bonds",
        ],
        correct: "C) Local employment rates",
      },
      {
        question: "What role do interest rates play in real estate economics?",
        options: [
          "A) They determine the legal price of real estate",
          "B) They affect mortgage affordability and demand for housing",
          "C) They set property tax rates",
          "D) They determine land availability",
        ],
        correct: "B) They affect mortgage affordability and demand for housing",
      },
      {
        question: "In real estate economics, what is a housing bubble?",
        options: [
          "A) A market condition where demand significantly exceeds supply",
          "B) A temporary decline in housing prices",
          "C) A rapid increase in home prices due to speculation, followed by a sharp decline",
          "D) A form of market stabilization",
        ],
        correct: "C) A rapid increase in home prices due to speculation, followed by a sharp decline",
      },
      {
        question: "What does the Price-to-Income Ratio in real estate economics measure?",
        options: [
          "A) The average home price in a given market",
          "B) The relationship between average household income and housing prices",
          "C) The interest rate on mortgages",
          "D) The number of properties available in the market",
        ],
        correct: "B) The relationship between average household income and housing prices",
      },
      {
        question: "Which of the following would likely lead to an increase in property values?",
        options: [
          "A) A high local crime rate",
          "B) An increase in local employment and wages",
          "C) A decrease in population",
          "D) A rise in property taxes",
        ],
        correct: "B) An increase in local employment and wages",
      },
      {
        question: "What is the main effect of inflation on the real estate market?",
        options: [
          "A) It decreases the cost of construction materials",
          "B) It leads to a decline in the value of real estate",
          "C) It raises the cost of borrowing, impacting affordability",
          "D) It stabilizes housing prices",
        ],
        correct: "C) It raises the cost of borrowing, impacting affordability",
      },
      {
        question: "What is meant by market equilibrium in real estate economics?",
        options: [
          "A) When supply and demand are balanced",
          "B) When the housing market is in a boom phase",
          "C) When property prices are declining",
          "D) When interest rates are at their lowest point",
        ],
        correct: "A) When supply and demand are balanced",
      },
      {
        question: "Urban sprawl typically leads to which of the following outcomes?",
        options: [
          "A) Decrease in housing supply",
          "B) Higher land values in urban areas",
          "C) Expansion of low-density housing into previously undeveloped areas",
          "D) Improved transportation infrastructure",
        ],
        correct: "C) Expansion of low-density housing into previously undeveloped areas",
      },
      {
        question: "What is the effective demand in the real estate market?",
        options: [
          "A) The number of people looking to buy a property",
          "B) The actual number of people who can afford to buy a property at current prices",
          "C) The price a seller is willing to accept",
          "D) The supply of homes available in the market",
        ],
        correct: "B) The actual number of people who can afford to buy a property at current prices",
      },
      {
        question: "In real estate economics, which of the following would decrease housing demand?",
        options: [
          "A) A rise in disposable income",
          "B) A decrease in mortgage interest rates",
          "C) A large increase in local population",
          "D) An increase in unemployment rates",
        ],
        correct: "D) An increase in unemployment rates",
      },
      {
        question: "Which of the following can be considered a market failure in real estate economics?",
        options: [
          "A) A situation where housing supply meets demand",
          "B) An overabundance of affordable housing",
          "C) A housing bubble where property prices exceed intrinsic values",
          "D) The reduction of property taxes",
        ],
        correct: "C) A housing bubble where property prices exceed intrinsic values",
      },
      {
        question: "In real estate, liquidity refers to:",
        options: [
          "A) The ease with which property can be sold or converted to cash",
          "B) The interest rate paid on property loans",
          "C) The growth in property values over time",
          "D) The level of economic development in a city",
        ],
        correct: "A) The ease with which property can be sold or converted to cash",
      },
      {
        question: "In real estate economics, land use regulation affects:",
        options: [
          "A) Only residential properties",
          "B) Property prices by restricting or encouraging certain types of development",
          "C) The ability of people to buy homes",
          "D) The number of real estate agents in the market",
        ],
        correct: "B) Property prices by restricting or encouraging certain types of development",
      },
      {
        question: "Which of the following would increase real estate investment demand?",
        options: [
          "A) Decrease in rental yields",
          "B) Economic stability and low inflation",
          "C) Higher property taxes",
          "D) Increase in local unemployment rates",
        ],
        correct: "B) Economic stability and low inflation",
      },
      {
        question: "Interest is the compensation paid for the use of:",
        options: [
          "A. savings",
          "B. Income",
          "C. rent",
          "D. capital",
        ],
        correct: "D. capital",
      },
      {
        question: "Amortization refers to the process of making installment payments consisting of principal and interest that reduces the:",
        options: [
          "A. loan balance",
          "B. term payment",
          "C. principal",
          "D. Interest payments",
        ],
        correct: "A. loan balance",
      },
      {
        question: "How much is the indicative value of the property if its net annual income is P2,500,000 with an overall capitalization rate of 10%?",
        options: [
          "A. P2.75M",
          "B. P25M",
          "C. P250M",
          "D. P27.5M",
        ],
        correct: "B. P25M",
      },
      {
        question: "A commercial property producing an annual gross income of P390,000 was sold two months ago for P3,412,500. What is the property's gross income multiplier?",
        options: [
          "A. 8.75",
          "B. 7.75",
          "C. 7.0",
          "D. 8.5",
        ],
        correct: "A. 8.75",
      },
      {
        question: "If a particular buyer requires a recapture of the building portion of the price in 30 years, what is the indicated recapture rate of the building?",
        options: [
          "A. 3%",
          "B. 3 1/2%",
          "C. 3 1/3%",
          "D. 3 1/4%",
        ],
        correct: "C. 3 1/3%",
      },
      {
        question: "In a soft market, a landlord accepted a new tenant with a 60-month lease at P15,000.00 per month but gave the new tenant 3 months free rent. Using the average rent method, what is the effective monthly rent?",
        options: [
          "A. P14,000.00",
          "B. P14,250.00",
          "C. P14,500.00",
          "D. P15,000.00",
        ],
        correct: "B. P14,250.00",
      },
      {
        question: "What is real estate finance primarily concerned with?",
        options: [
          "A) The process of designing properties",
          "B) The legal aspects of property transactions",
          "C) The methods of funding, investment, and financial management in real estate",
          "D) The environmental impacts of real estate development",
        ],
        correct: "C) The methods of funding, investment, and financial management in real estate",
      },
      {
        question: "What does loan-to-value (LTV) ratio represent in real estate finance?",
        options: [
          "A) The proportion of a loan relative to the property's value",
          "B) The annual interest rate on a mortgage",
          "C) The cost of obtaining a mortgage",
          "D) The percentage of taxes owed on a property",
        ],
        correct: "A) The proportion of a loan relative to the property's value",
      },
      {
        question: "Which of the following is a fixed-rate mortgage?",
        options: [
          "A) A mortgage where the interest rate changes periodically based on market rates",
          "B) A mortgage with a set interest rate for the entire term of the loan",
          "C) A mortgage where the loan amount fluctuates over time",
          "D) A loan used for purchasing investment properties only",
        ],
        correct: "B) A mortgage with a set interest rate for the entire term of the loan",
      },
      {
        question: "What does the term 'equity' refer to?",
        options: [
          "A) The value of the property minus any debts owed",
          "B) The interest paid on the mortgage",
          "C) The initial deposit made on a property",
          "D) The total market value of the property",
        ],
        correct: "A) The value of the property minus any debts owed",
      },
      {
        question: "What is a reverse mortgage?",
        options: [
          "A) A mortgage where the borrower makes payments to the lender",
          "B) A loan that allows homeowners to borrow against their property's equity, with no required payments until they sell or move",
          "C) A loan used to finance commercial real estate",
          "D) A mortgage with a fixed interest rate",
        ],
        correct: "B) A loan that allows homeowners to borrow against their property's equity, with no required payments until they sell or move",
      },
      {
        question: "Which of the following would be considered subprime lending in real estate finance?",
        options: [
          "A) Loans given to borrowers with excellent credit",
          "B) Loans given to borrowers with high creditworthiness and stable incomes",
          "C) Loans given to borrowers with poor credit or high-risk profiles",
          "D) Loans given to first-time homebuyers with government backing",
        ],
        correct: "C) Loans given to borrowers with poor credit or high-risk profiles",
      },
      {
        question: "Which of the following is a primary source of funding for mortgage lenders?",
        options: [
          "A) Revenue from property management fees",
          "B) Fees collected from real estate brokers",
          "C) Deposits from borrowers into a savings account",
          "D) Selling mortgage-backed securities to investors",
        ],
        correct: "D) Selling mortgage-backed securities to investors",
      },
      {
        question: "What does debt service coverage ratio (DSCR) measure in real estate finance?",
        options: [
          "A) The amount of equity a borrower has in the property",
          "B) The ratio of rental income to property management fees",
          "C) The ability of a borrower to repay a loan based on income relative to debt payments",
          "D) The total amount of the loan relative to the value of the property",
        ],
        correct: "C) The ability of a borrower to repay a loan based on income relative to debt payments",
      },
      {
        question: "What is the term length of a typical residential mortgage in the Philippines?",
        options: [
          "A) 5 years",
          "B) 10 years",
          "C) 15 years",
          "D) 30 years",
        ],
        correct: "D) 30 years",
      },
      {
        question: "What does capitalization rate (cap rate) measure in real estate?",
        options: [
          "A) The profitability of a real estate investment based on its net operating income and market value",
          "B) The market value of a property",
          "C) The cost of financing a property",
          "D) The amount of rent a property can generate",
        ],
        correct: "A) The profitability of a real estate investment based on its net operating income and market value",
      },
      {
        question: "Which of the following is an example of debt financing in real estate?",
        options: [
          "A) Selling shares of a property development project",
          "B) Borrowing money through a mortgage loan to purchase property",
          "C) Raising funds through crowdfunding for property acquisition",
          "D) Financing a property with personal savings",
        ],
        correct: "B) Borrowing money through a mortgage loan to purchase property",
      },
      {
        question: "What is the role of amortization in a real estate loan?",
        options: [
          "A) It determines the final loan balance",
          "B) It is the gradual repayment of the principal and interest over the loan term",
          "C) It calculates the loan-to-value ratio",
          "D) It establishes the equity value of the property",
        ],
        correct: "B) It is the gradual repayment of the principal and interest over the loan term",
      },
      {
        question: "A real estate company that offers common shares to the public which is similar to any other stock that represents ownership in an operating business:",
        options: [
          "A. Real Estate Development Corporation",
          "B. Real Estate Investment Trust",
          "C. Real Estate Investment Company",
          "D. Real Estate Development Trust",
        ],
        correct: "B. Real Estate Investment Trust",
      },
      {
        question: "What is the minimum number of years of good track record from date of acquisition that a real estate should be considered as an allowable investment of a REIT?",
        options: [
          "A. 3",
          "B. 4",
          "C. 5",
          "D. 6",
        ],
        correct: "A. 3",
      },
      {
        question: "A Real Investment Trust must have a minimum paid up capital of at least:",
        options: [
          "A. P300,000,000.00",
          "B. P500,000,000.00",
          "C. P1,000,000,000.00",
          "D. P5,000,000,000.00",
        ],
        correct: "A. P300,000,000.00",
      },
      {
        question: "What is the primary regulatory body responsible for overseeing the governance and financial transparency of REITs in the Philippines?",
        options: [
          "A) Department of Finance (DOF)",
          "B) Bureau of Internal Revenue (BIR)",
          "C) Securities and Exchange Commission (SEC)",
          "D) Philippine Stock Exchange (PSE)",
        ],
        correct: "C) Securities and Exchange Commission (SEC)",
      },
      {
        question: "Which of the following is a requirement for the assets of a REIT under the REIT Act?",
        options: [
          "A) 90% of the assets must be invested in real estate-related securities",
          "B) At least 75% of the assets must be invested in income-generating real estate properties",
          "C) 100% of the assets must be invested in office buildings",
          "D) The remaining 25% of the assets must be in cash reserves",
        ],
        correct: "B) At least 75% of the assets must be invested in income-generating real estate properties",
      },
      {
        question: "How do REITs offer liquidity to their investors in the Philippines?",
        options: [
          "A) By issuing long-term bonds that investors can sell",
          "B) By providing redemption options for investors to cash out their shares at any time",
          "C) By allowing investors to buy and sell shares on the Philippine Stock Exchange (PSE)",
          "D) By offering buyback programs at a set price",
        ],
        correct: "C) By allowing investors to buy and sell shares on the Philippine Stock Exchange (PSE)",
      },
      {
        question: "It is the national agenda for sustainable development. It outlines the integrating strategies for the country's overall sustainable development and identifies the intervention areas from the national to the regional level:",
        options: [
          "A. PA 20",
          "B. SD 21",
          "C. PA 21",
          "D. SD 20",
        ],
        correct: "C. PA 21",
      },
      {
        question: "The change in the development of urban commercial centers is due to:",
        options: [
          "A. Urban Renewal",
          "B. Urban Re-development",
          "C. Urban Decay",
          "D. Revitalization",
        ],
        correct: "C. Urban Decay",
      },
      {
        question: "It is a type of settlement where accretion occurs around nodes or core settlement resulting in agglomeration:",
        options: [
          "A. organic",
          "B. planned",
          "C. neighborhood",
          "D. municipality",
        ],
        correct: "A. organic",
      },
      {
        question: "This consists of provisions of basic utilities, judicious allocation of areas, good layout based on sound planning principles:",
        options: [
          "A. Planned Community",
          "B. Planned Subdivision",
          "C. Planned Village",
          "D. Planned Neighborhood",
        ],
        correct: "A. Planned Community",
      },
      {
        question: "The required population density of a municipality for it to be charted into a City:",
        options: [
          "A. 1,000 people/sq km",
          "B. 500 people/sq km",
          "C. 750 people/sq km",
          "D. 250 people/sq km",
        ],
        correct: "A. 1,000 people/sq km",
      },
      {
        question: "Lands in the National Capital Region are covered by the Urban Land Reform Law when they are:",
        options: [
          "A. Big landed areas",
          "B. Abandoned and idle lands",
          "C. Within 244 area for priority development",
          "D. Suitable for socialized housing",
        ],
        correct: "C. Within 244 area for priority development",
      },
      {
        question: "According to Section 14 of the Urban Land Reform Act, which of the following land disposition techniques may the Ministry of Human Settlements utilize within the Urban Land Reform Zones?",
        options: [
          "A) Only government lease agreements for residential purposes",
          "B) Neighborhood ownership, residential freeholds subject to improvement conditions, and separate tenure in improvements and land",
          "C) Direct sale of land to foreign entities without restrictions",
          "D) Only the sale of land with no conditions attached",
        ],
        correct: "B) Neighborhood ownership, residential freeholds subject to improvement conditions, and separate tenure in improvements and land",
      },
      {
        question: "Which of the following is true about the Development Use Permit System for Urban Land Reform Areas as stated in Section 15?",
        options: [
          "A) It applies only to rural land areas for agricultural use",
          "B) It governs the development of lands within proclaimed Urban Zones and/or Bagong Lipunan sites",
          "C) It only applies to commercial properties within designated zones",
          "D) It is not applicable to lands developed for residential purposes",
        ],
        correct: "B) It governs the development of lands within proclaimed Urban Zones and/or Bagong Lipunan sites",
      },
      {
        question: "What penalties may be imposed for violations of provisions under the Urban Land Reform Act as per Sections 20 and 21?",
        options: [
          "A) A fine of up to Php 10,000 and/or imprisonment for a maximum of 5 years",
          "B) A fine of up to Php 20,000 and/or imprisonment for a maximum of 10 years, with daily violations considered a separate offense",
          "C) Only a fine of up to Php 10,000 for individuals, with no imprisonment",
          "D) A fine of Php 5,000 and mandatory community service for individuals and corporations",
        ],
        correct: "B) A fine of up to Php 20,000 and/or imprisonment for a maximum of 10 years, with daily violations considered a separate offense",
      },
      {
        question: "What does 'Combined or multiple land uses' refer to?",
        options: [
          "a) The process of separating different land uses",
          "b) The combining of different land uses in a single site or parcel of land",
          "c) The alteration of land uses over time",
          "d) A zoning regulation that requires land to be used for a specific purpose",
        ],
        correct: "b) The combining of different land uses in a single site or parcel of land",
      },
      {
        question: "Which of the following best defines 'Irreversible' land use?",
        options: [
          "a) Land use that can be easily restored to its previous state",
          "b) Land use that involves changes and alterations making it impossible to restore to its original condition",
          "c) Land use that has minimal impact on the environment",
          "d) Land use that is reversible",
        ],
        correct: "b) Land use that involves changes and alterations making it impossible to restore to its original condition",
      },
      {
        question: "What is a 'Settlement'?",
        options: [
          "a) A temporary or permanent community where people live",
          "b) A type of building or structure",
          "c) A form of government regulation for land use",
          "d) A region that is exclusively urban in nature",
        ],
        correct: "a) A temporary or permanent community where people live",
      },
      {
        question: "Which type of settlement is described as having developed along a line?",
        options: [
          "a) Dispersed settlement",
          "b) Nucleated settlement",
          "c) Linear settlement",
          "d) Market town",
        ],
        correct: "c) Linear settlement",
      },
      {
        question: "A 'Dispersed settlement' is characterized by:",
        options: [
          "a) Buildings grouped together",
          "b) Buildings that are spread apart",
          "c) A high concentration of services",
          "d) A government-owned community",
        ],
        correct: "b) Buildings that are spread apart",
      },
      {
        question: "What defines a 'Nucleated settlement'?",
        options: [
          "a) A settlement with buildings scattered across a vast area",
          "b) A settlement with buildings grouped together",
          "c) A settlement primarily focused on agriculture",
          "d) A settlement with large industrial areas",
        ],
        correct: "b) A settlement with buildings grouped together",
      },
      {
        question: "What is the main characteristic of 'Market towns'?",
        options: [
          "a) These areas rely heavily on manufacturing",
          "b) They are found in fertile farming sites and provide many services",
          "c) They focus on industrial development",
          "d) They contain a homogenous population",
        ],
        correct: "b) They are found in fertile farming sites and provide many services",
      },
      {
        question: "'Industrial towns' are characterized by:",
        options: [
          "a) Agricultural activities and small shops",
          "b) Residential areas only",
          "c) Railways, canals, and mixed housing and industry",
          "d) A lack of transport infrastructure",
        ],
        correct: "c) Railways, canals, and mixed housing and industry",
      },
      {
        question: "Which type of settlement contains a heterogeneous population and a wide range of land uses?",
        options: [
          "a) Rural settlements",
          "b) Urban settlements",
          "c) Market towns",
          "d) Industrial towns",
        ],
        correct: "b) Urban settlements",
      },
      {
        question: "Which of the following best describes 'Rural settlements'?",
        options: [
          "a) Large, expansive areas with many services",
          "b) Self-contained areas relying on a local and agricultural-based economy",
          "c) Settlements with a heterogeneous population",
          "d) Areas with high population density",
        ],
        correct: "b) Self-contained areas relying on a local and agricultural-based economy",
      },
      {
        question: "What does 'Planning' refer to in the context of land use?",
        options: [
          "a) A government-enforced zoning regulation",
          "b) A document outlining land use for the future",
          "c) An anticipated list of activities to achieve a specific target",
          "d) The allocation of all available land for commercial purposes",
        ],
        correct: "c) An anticipated list of activities to achieve a specific target",
      },
      {
        question: "What is the primary goal of 'Land use planning'?",
        options: [
          "a) To enforce property taxes",
          "b) To allocate available land resources to different land-using activities",
          "c) To restrict development in urban areas",
          "d) To prevent the establishment of settlements",
        ],
        correct: "b) To allocate available land resources to different land-using activities",
      },
      {
        question: "What is the purpose of a 'Land use plan'?",
        options: [
          "a) To outline the future spatial arrangement of land uses and propose actions to implement it",
          "b) To decide the tax rates for different land uses",
          "c) To create zoning regulations for different areas",
          "d) To collect data on land ownership",
        ],
        correct: "a) To outline the future spatial arrangement of land uses and propose actions to implement it",
      },
      {
        question: "A 'Comprehensive Land Use Plan' (CLUP) is:",
        options: [
          "a) A detailed environmental impact assessment",
          "b) A document with specific proposals for guiding and regulating growth and development in a city or municipality",
          "c) A land sale agreement",
          "d) A zoning regulation for industrial zones",
        ],
        correct: "b) A document with specific proposals for guiding and regulating growth and development in a city or municipality",
      },
      {
        question: "What is the purpose of 'Zoning'?",
        options: [
          "a) To determine the pricing of land",
          "b) To allocate specific areas for designated activities",
          "c) To enforce building codes in an area",
          "d) To regulate transportation systems",
        ],
        correct: "b) To allocate specific areas for designated activities",
      },
      {
        question: "Which document serves as the principal instrument for implementing the CLUP?",
        options: [
          "a) Zoning ordinance",
          "b) Land use map",
          "c) Building code",
          "d) Comprehensive plan",
        ],
        correct: "a) Zoning ordinance",
      },
      {
        question: "'Protection' as a land use policy area refers to:",
        options: [
          "a) Resources that need to be extracted for economic development",
          "b) Areas requiring protection, conservation, and disaster prevention",
          "c) Development of commercial spaces in urban areas",
          "d) High-density residential developments",
        ],
        correct: "b) Areas requiring protection, conservation, and disaster prevention",
      },
      {
        question: "Which land use policy area deals with capital investments that support spatial integration and social service delivery?",
        options: [
          "a) Protection",
          "b) Production",
          "c) Infrastructure",
          "d) Sustainability",
        ],
        correct: "c) Infrastructure",
      },
      {
        question: "'Urbanization' is the process that refers to:",
        options: [
          "a) The physical expansion of rural areas",
          "b) Changes in behavior and social relationships due to living in towns and cities",
          "c) The decrease in population density in cities",
          "d) The abandonment of agricultural land",
        ],
        correct: "b) Changes in behavior and social relationships due to living in towns and cities",
      },
      {
        question: "Which of the following is characteristic of 'Urban land use'?",
        options: [
          "a) Limited infrastructure and services",
          "b) Primarily agricultural activities",
          "c) A wide range of commercial, residential, and industrial activities",
          "d) Self-contained, small settlements",
        ],
        correct: "c) A wide range of commercial, residential, and industrial activities",
      },
      {
        question: "What best defines 'Rural land use'?",
        options: [
          "a) Focus on non-agricultural industries",
          "b) Primarily residential with large commercial areas",
          "c) Focus on agriculture and self-contained settlements",
          "d) High population density with diverse land uses",
        ],
        correct: "c) Focus on agriculture and self-contained settlements",
      },
      {
        question: "Which of the following best describes 'Urbanization' (repeated)?",
        options: [
          "a) The decline of agricultural land",
          "b) The shift from rural to urban living with associated social and behavioral changes",
          "c) The conversion of land for industrial uses",
          "d) The reduction in the number of people living in cities",
        ],
        correct: "b) The shift from rural to urban living with associated social and behavioral changes",
      },
      {
        question: "What type of land use policy is focused on preventing environmental degradation and promoting disaster prevention?",
        options: [
          "a) Protection",
          "b) Production",
          "c) Infrastructure",
          "d) Urbanization",
        ],
        correct: "a) Protection",
      },
      {
        question: "Which of the following is NOT typically found in urban land use?",
        options: [
          "a) High-density residential areas",
          "b) Commercial and business districts",
          "c) Large agricultural fields",
          "d) Industrial zones",
        ],
        correct: "c) Large agricultural fields",
      },
      {
        question: "A settlement that primarily relies on agriculture and has limited access to urban services is considered:",
        options: [
          "a) Urban settlement",
          "b) Rural settlement",
          "c) Suburban settlement",
          "d) Industrial settlement",
        ],
        correct: "b) Rural settlement",
      },
      {
        question: "What is a 'Dispersed settlement' (repeated)?",
        options: [
          "a) A settlement where buildings are grouped together in a concentrated area",
          "b) A settlement spread out across a large area with buildings far apart",
          "c) A settlement found only in urban areas",
          "d) A settlement characterized by a homogeneous population",
        ],
        correct: "b) A settlement spread out across a large area with buildings far apart",
      },
      {
        question: "Which of the following is characteristic of 'Urban settlements'?",
        options: [
          "a) Limited diversity in land uses",
          "b) Primarily agricultural-focused",
          "c) A heterogeneous population with different cultures and ethnicities",
          "d) Lack of transportation infrastructure",
        ],
        correct: "c) A heterogeneous population with different cultures and ethnicities",
      },
      {
        question: "'Market towns' are most likely to be found in:",
        options: [
          "a) Areas with high levels of industrial activity",
          "b) Fertile farming areas with access to many services",
          "c) Densely populated urban areas",
          "d) Remote areas with little or no services",
        ],
        correct: "b) Fertile farming areas with access to many services",
      },
      {
        question: "Which land use policy area focuses on economic production, ranging from extractive industries to modern services?",
        options: [
          "a) Protection",
          "b) Infrastructure",
          "c) Production",
          "d) Urbanization",
        ],
        correct: "c) Production",
      },
      {
        question: "It is the process in water cycle that water passes through plants into the air as water vapor:",
        options: [
          "A. condensation",
          "B. evaporation",
          "C. precipitation",
          "D. transpiration",
        ],
        correct: "D. transpiration",
      },
      {
        question: "The theory that species have changed over long periods of time is known as:",
        options: [
          "A. succession",
          "B. ecology",
          "C. generation",
          "D. evolution",
        ],
        correct: "D. evolution",
      },
      {
        question: "The continued erosion of topsoil and the formation of deserts on grazing land:",
        options: [
          "A. desertification",
          "B. soil erosion",
          "C. liquefaction",
          "D. landslide",
        ],
        correct: "A. desertification",
      },
      {
        question: "The following are examples of 'refuse', EXCEPT:",
        options: [
          "A. Garbage",
          "B. Sewage and industrial wastes",
          "C. Other wastes",
          "D. lime cinder ashes",
        ],
        correct: "B. Sewage and industrial wastes",
      },
      {
        question: "The air contains 78% nitrogen which the plants can not use in that form. It is in this usable form that plant can use nitrogen:",
        options: [
          "A. bacteria",
          "B. fertilizer",
          "C. algae",
          "D. lightning",
        ],
        correct: "B. fertilizer",
      },
      {
        question: "It refers to the management of the earth's resources in a way, which aims to restore and maintain the balance between human requirements and the other species of the world:",
        options: [
          "A. Biodiversity",
          "B. Conservation",
          "C. Ecological footprint",
          "D. sustainable development",
        ],
        correct: "B. Conservation",
      },
      {
        question: "A gas that traps heat that would otherwise dissipate from the earth's surface:",
        options: [
          "A. methane gas",
          "B. carbon dioxide",
          "C. greenhouse gas",
          "D. oxygen",
        ],
        correct: "C. greenhouse gas",
      },
      {
        question: "Most extinctions occurring in the world today were caused by:",
        options: [
          "A. climate change",
          "B. floods",
          "C. lost of habitat",
          "D. hurricane",
        ],
        correct: "C. lost of habitat",
      },
      {
        question: "The biggest impact on the environment are made through:",
        options: [
          "A. migration",
          "B. competition",
          "C. predation",
          "D. human activities",
        ],
        correct: "D. human activities",
      },
      {
        question: "Which of the following best defines ecology?",
        options: [
          "A) The study of human populations and their impact on the environment",
          "B) The study of interactions between organisms and their environment",
          "C) The study of the physical properties of Earth",
          "D) The study of plant and animal behavior in the wild",
        ],
        correct: "B) The study of interactions between organisms and their environment",
      },
      {
        question: "Which of the following is a biotic factor in an ecosystem?",
        options: [
          "A) Temperature",
          "B) Soil composition",
          "C) Water availability",
          "D) Predation",
        ],
        correct: "D) Predation",
      },
      {
        question: "What is the main source of energy for nearly all ecosystems?",
        options: [
          "A) Wind",
          "B) Sunlight",
          "C) Chemical energy from minerals",
          "D) Water currents",
        ],
        correct: "B) Sunlight",
      },
      {
        question: "What is the role of producers in an ecosystem?",
        options: [
          "A) They break down dead organisms and recycle nutrients",
          "B) They consume other organisms for energy",
          "C) They create their own food through photosynthesis",
          "D) They regulate the population of herbivores",
        ],
        correct: "C) They create their own food through photosynthesis",
      },
      {
        question: "Which of the following best describes a food chain?",
        options: [
          "A) A complex network of feeding relationships in an ecosystem",
          "B) The transfer of energy from one organism to another in a linear sequence",
          "C) A diagram of the physical environment and its organisms",
          "D) The relationship between a predator and its prey",
        ],
        correct: "B) The transfer of energy from one organism to another in a linear sequence",
      },
      {
        question: "Which type of organism is most likely to be at the top of a food web?",
        options: [
          "A) Primary producers",
          "B) Primary consumers",
          "C) Secondary consumers",
          "D) Tertiary consumers",
        ],
        correct: "D) Tertiary consumers",
      },
      {
        question: "What is the term for the maximum population size that an environment can support over time?",
        options: [
          "A) Population growth rate",
          "B) Carrying capacity",
          "C) Exponential growth",
          "D) Logistic growth",
        ],
        correct: "B) Carrying capacity",
      },
      {
        question: "In a trophic pyramid, which level contains the most energy?",
        options: [
          "A) Top predators",
          "B) Secondary consumers",
          "C) Primary consumers",
          "D) Producers",
        ],
        correct: "D) Producers",
      },
      {
        question: "What happens to the energy as it moves up the trophic levels in an ecosystem?",
        options: [
          "A) It increases",
          "B) It is completely passed on to the next level",
          "C) It decreases as some energy is lost as heat",
          "D) It stays constant across all levels",
        ],
        correct: "C) It decreases as some energy is lost as heat",
      },
      {
        question: "Which of the following is an example of mutualism?",
        options: [
          "A) A lion hunting a zebra",
          "B) A bee pollinating a flower",
          "C) A tick feeding on a dog",
          "D) A shark eating fish from a coral reef",
        ],
        correct: "B) A bee pollinating a flower",
      },
      {
        question: "A church in a residential area is an example of:",
        options: [
          "A. police power",
          "B. forecast absorption",
          "C. a nonconforming use",
          "D. a private restriction",
        ],
        correct: "C. a nonconforming use",
      },
      {
        question: "What is an Environmental Impact Assessment (EIA)? The importance of EIA as a tool that measures allocation and utilization in terms of cost associated with:",
        options: [
          "A. environmental preservation",
          "B. environmental degradation",
          "C. environmental conservation",
          "D. environmental awareness",
        ],
        correct: "B. environmental degradation",
      },
      {
        question: "The Philippine Environmental Impact System (EIS) was formally established in 1978 by virtue of:",
        options: [
          "A. PD 1586",
          "B. RA 6465",
          "C. RA1586",
          "D. PD 857",
        ],
        correct: "A. PD 1586",
      },
      {
        question: "A section of the EIS that details the prevention, mitigation, compensation, contingency and monitoring measures to enhance positive impacts and minimize negative impacts of a proposed project is called:",
        options: [
          "A. Environmental Impact Statement",
          "B. Environmental Management Plan",
          "C. Environmentally Critical Area",
          "D. Environmentally Critical Project",
        ],
        correct: "B. Environmental Management Plan",
      },
      {
        question: "Which of the following is the primary purpose of the Zoning Ordinance in the Philippines?",
        options: [
          "A) To regulate the construction of government buildings",
          "B) To divide land into different zones based on land use",
          "C) To prevent the development of residential areas",
          "D) To promote industrial expansion in urban areas",
        ],
        correct: "B) To divide land into different zones based on land use",
      },
      {
        question: "What is the key function of the Floor Area Ratio (FAR) in zoning?",
        options: [
          "A) To limit the height of buildings",
          "B) To control the density and mass of buildings relative to the lot size",
          "C) To restrict the number of residential units in a development",
          "D) To regulate the distance of buildings from the road",
        ],
        correct: "B) To control the density and mass of buildings relative to the lot size",
      },
      {
        question: "Which government agency in the Philippines is responsible for regulating land reclamation projects?",
        options: [
          "A) Department of Public Works and Highways (DPWH)",
          "B) Philippine Reclamation Authority (PRA)",
          "C) Department of the Interior and Local Government (DILG)",
          "D) Housing and Land Use Regulatory Board (HLURB)",
        ],
        correct: "B) Philippine Reclamation Authority (PRA)",
      },
      {
        question: "Which zoning category typically permits mixed residential and commercial uses within the same district in the Philippines?",
        options: [
          "A) Agricultural Zone",
          "B) Residential Zone",
          "C) Commercial Zone",
          "D) Mixed-Use Zone",
        ],
        correct: "D) Mixed-Use Zone",
      },
      {
        question: "What is required for a municipality or city to amend its zoning ordinance?",
        options: [
          "A) Approval from the Department of Interior and Local Government (DILG)",
          "B) A public hearing and approval by the local Sanggunian (Legislative Council)",
          "C) Approval by the DHSUD",
          "D) Environmental Impact Assessment (EIA) submission",
        ],
        correct: "B) A public hearing and approval by the local Sanggunian (Legislative Council)",
      },
      {
        question: "What does the 'R-1' zoning category typically represent in a zoning ordinances?",
        options: [
          "A) Agricultural land use",
          "B) High-density commercial areas",
          "C) Low-density residential areas",
          "D) Industrial areas for manufacturing",
        ],
        correct: "C) Low-density residential areas",
      },
      {
        question: "Which of the following is NOT a requirement when applying for a zoning variance?",
        options: [
          "A) A formal petition to the local zoning board",
          "B) Public consultation or hearing",
          "C) Approval from the DHSUD",
          "D) A demonstration of hardship or practical difficulty in complying with zoning requirements",
        ],
        correct: "C) Approval from the DHSUD",
      },
      {
        question: "Which of the following is a typical feature of an industrial zoning district in the Philippines?",
        options: [
          "A) Residential buildings with small shops",
          "B) Large manufacturing plants, warehouses, and factories",
          "C) Parks and green spaces",
          "D) Mixed-use residential-commercial developments",
        ],
        correct: "B) Large manufacturing plants, warehouses, and factories",
      },
      {
        question: "What is the primary role of the Zoning Administrator in a local government unit (LGU) in the Philippines?",
        options: [
          "A) To create the Comprehensive Land Use Plan (CLUP)",
          "B) To manage and enforce zoning regulations and ensure compliance with zoning ordinances",
          "C) To conduct public consultations on zoning changes",
          "D) To approve building permits for new structures",
        ],
        correct: "B) To manage and enforce zoning regulations and ensure compliance with zoning ordinances",
      },
      {
        question: "What is the purpose of a 'Land Use Map' in the zoning process?",
        options: [
          "A) To show the historical development of land use in a specific area",
          "B) To visually depict the zoning districts and land use categories within a local government unit",
          "C) To highlight areas of environmental significance for preservation",
          "D) To determine the tax value of land for local governments",
        ],
        correct: "B) To visually depict the zoning districts and land use categories within a local government unit",
      },
      {
        question: "Which of the following zoning districts is most likely to allow high-rise residential buildings in the Philippines?",
        options: [
          "A) Agricultural Zone",
          "B) Residential (R-3) Zone",
          "C) Commercial (C-1) Zone",
          "D) Industrial Zone",
        ],
        correct: "B) Residential (R-3) Zone",
      },
      {
        question: "What is the term for a legal action taken by a property owner to request a deviation from specific zoning requirements, such as setbacks or use restrictions?",
        options: [
          "A) Zoning Amendment",
          "B) Zoning Variance",
          "C) Zoning Classification",
          "D) Zoning Appeal",
        ],
        correct: "B) Zoning Variance",
      },
      {
        question: "If the applicant for conversion of an agricultural land is a beneficiary of the agrarian reform program, what special documentary requirements is required?",
        options: [
          "A. Certification from the Mayor that beneficiary had paid his taxes",
          "B. Certification from Provincial Agrarian Reform Officer that at least 5 years have lapsed since the award of the land",
          "C. Certification from Land Bank that the beneficiary has fully paid his obligation",
          "D. Joint venture agreement or any other business arrangement between the beneficiary and the developer",
        ],
        correct: "B. Certification from Provincial Agrarian Reform Officer that at least 5 years have lapsed since the award of the land",
      },
      {
        question: "A parcel of land subdivided into smaller lots properly planned with streets and open spaces is:",
        options: [
          "A. Regular subdivision",
          "B. Complex subdivision",
          "C. Consolidation-subdivision",
          "D. Simple subdivision",
        ],
        correct: "B. Complex subdivision",
      },
      {
        question: "A parcel of land subdivided into smaller lots properly planned without streets and open spaces is:",
        options: [
          "A. Regular subdivision",
          "B. Complex subdivision",
          "C. Consolidation-subdivision",
          "D. Simple subdivision",
        ],
        correct: "D. Simple subdivision",
      },
      {
        question: "Contour lines refers to those lines in a topographic map which indicate the (repeated):",
        options: [
          "A. elevation of the land at upper sections",
          "B. elevation of the land at lower sections",
          "C. elevation of the land at various sections",
          "D. elevation of the land at middle sections",
        ],
        correct: "C. elevation of the land at various sections",
      },
      {
        question: "The technical description in the TCT of a real property that can readily be plotted on a sheet by using what data?",
        options: [
          "A. Bearing and lot points (monuments)",
          "B. Distance and lot points(monuments)",
          "C. Distance and bearing from lot point",
          "D. Bearing and tie line",
        ],
        correct: "C. Distance and bearing from lot point",
      },
      {
        question: "The measurement of the land to determine its external boundaries and ascertain whether or not there are encroachments:",
        options: [
          "A. Relocation Survey",
          "B. Amendment Survey",
          "C. Subdivision Survey",
          "D. Cadastral Survey",
        ],
        correct: "A. Relocation Survey",
      },
      {
        question: "Which is not one of the Reference Monuments?",
        options: [
          "A. Provincial Boundary Monuments",
          "B. Barrio Boundary Monuments",
          "C. Municipal Boundary Monuments",
          "D. Barangay Boundary",
        ],
        correct: "D. Barangay Boundary",
      },
      {
        question: "What is the primary purpose of Land Administration?",
        options: [
          "a) To develop state-owned lands",
          "b) To manage land taxes",
          "c) To administer land rights including recording, registering, and publicizing land grants or transfers",
          "d) To plan the use of land resources",
        ],
        correct: "c) To administer land rights including recording, registering, and publicizing land grants or transfers",
      },
      {
        question: "What does Land Management primarily focus on?",
        options: [
          "a) Managing land ownership only",
          "b) Managing the allocation and use of land resources, including social, economic, and environmental issues",
          "c) Only managing public lands",
          "d) Regulating land sales and ownership",
        ],
        correct: "b) Managing the allocation and use of land resources, including social, economic, and environmental issues",
      },
      {
        question: "What is Land Tenure?",
        options: [
          "a) A tax on land ownership",
          "b) The process of selling land",
          "c) The legal rights and arrangements governing land ownership, use, and transfer",
          "d) A document that approves land sale transactions",
        ],
        correct: "c) The legal rights and arrangements governing land ownership, use, and transfer",
      },
      {
        question: "Which of the following best describes Land Registration?",
        options: [
          "a) A system that manages land resources",
          "b) A process that determines and confirms a person's claim over land to be recorded in a public registry",
          "c) A procedure for developing state-owned lands",
          "d) The approval of land conversion requests",
        ],
        correct: "b) A process that determines and confirms a person's claim over land to be recorded in a public registry",
      },
      {
        question: "What is the main objective of Land Conversion?",
        options: [
          "a) To change land from residential to commercial use",
          "b) To transfer land ownership to the government",
          "c) To change the use of land, typically from agricultural to non-agricultural purposes",
          "d) To reclassify land according to local zoning laws",
        ],
        correct: "c) To change the use of land, typically from agricultural to non-agricultural purposes",
      },
      {
        question: "What does a Land Use Conversion Order authorize?",
        options: [
          "a) The sale of government land",
          "b) The change of classification of land use",
          "c) The conversion of land from one use to another, such as agricultural to residential or commercial",
          "d) The registration of land in a public registry",
        ],
        correct: "c) The conversion of land from one use to another, such as agricultural to residential or commercial",
      },
      {
        question: "Which of the following is involved in Land Reclassification?",
        options: [
          "a) Changing the ownership of land",
          "b) Changing the classification of land within a local zoning ordinance",
          "c) Converting agricultural land to residential use",
          "d) Confirming land ownership in a public registry",
        ],
        correct: "b) Changing the classification of land within a local zoning ordinance",
      },
      {
        question: "Who is primarily responsible for Land Reclassification in the Philippines?",
        options: [
          "a) Department of Agrarian Reform (DAR)",
          "b) Local Government Units (LGUs)",
          "c) Department of Environment and Natural Resources (DENR)",
          "d) National Housing Authority (NHA)",
        ],
        correct: "b) Local Government Units (LGUs)",
      },
      {
        question: "It is an Act enacted in order to curb illegal logging and other forms of forest destruction:",
        options: [
          "A. Cut Saw Act of 2002",
          "B. Blade Saw Act of 2002",
          "C. Log Saw Act of 2002",
          "D. Chain Saw Act of 2002",
        ],
        correct: "D. Chain Saw Act of 2002",
      },
      {
        question: "A food web is:",
        options: [
          "A. spider habitat",
          "B. feeding relationships link",
          "C. consumers community",
          "D. organisms chain",
        ],
        correct: "B. feeding relationships link",
      },
      {
        question: "Which of the following is an abiotic component of an ecosystem?",
        options: [
          "A. Plants",
          "B. Animals",
          "C. Water",
          "D. Fungi",
        ],
        correct: "C. Water",
      },
      {
        question: "What is the role of producers in an ecosystem? (repeated):",
        options: [
          "A. To consume organic matter",
          "B. To break down dead organisms",
          "C. To produce their own food through photosynthesis",
          "D. To act as predators in the food chain",
        ],
        correct: "C. To produce their own food through photosynthesis",
      },
      {
        question: "Which of the following best describes a food chain? (repeated):",
        options: [
          "A. A network of interconnected food webs",
          "B. A linear sequence showing the flow of energy from one organism to another",
          "C. The interaction between plants and herbivores only",
          "D. A diagram showing the relationship between different ecosystems",
        ],
        correct: "B. A linear sequence showing the flow of energy from one organism to another",
      },
      {
        question: "Which trophic level contains the greatest amount of energy in an ecosystem?",
        options: [
          "A. Producers",
          "B. Primary consumers",
          "C. Secondary consumers",
          "D. Tertiary consumers",
        ],
        correct: "A. Producers",
      },
      {
        question: "Which of the following is a characteristic of a population?",
        options: [
          "A. The number of species within an ecosystem",
          "B. The interaction between different species in a community",
          "C. The number of individuals of the same species in a given area",
          "D. The biotic and abiotic components of a region",
        ],
        correct: "C. The number of individuals of the same species in a given area",
      },
      {
        question: "What is the term for the gradual process by which ecosystems change over time?",
        options: [
          "A. Adaptation",
          "B. Ecological succession",
          "C. Evolution",
          "D. Biome formation",
        ],
        correct: "B. Ecological succession",
      },
      {
        question: "What is a biome?",
        options: [
          "A. A small ecosystem within a specific area",
          "B. A large geographic biotic community",
          "C. The living components of an ecosystem",
          "D. A species of organisms living in a given area",
        ],
        correct: "B. A large geographic biotic community",
      },
      {
        question: "What type of symbiotic relationship is characterized by one organism benefiting at the expense of another?",
        options: [
          "A. Mutualism",
          "B. Commensalism",
          "C. Parasitism",
          "D. Competition",
        ],
        correct: "C. Parasitism",
      },
      {
        question: "Which of the following is an example of mutualism? (repeated):",
        options: [
          "A. A dog and a flea",
          "B. A bee and a flower",
          "C. A lion and a zebra",
          "D. A hawk and a mouse",
        ],
        correct: "B. A bee and a flower",
      },
      {
        question: "Which factor would most likely limit the growth of a population?",
        options: [
          "A. A constant food supply",
          "B. A high birth rate",
          "C. A shortage of available space or food",
          "D. An increase in reproductive rate",
        ],
        correct: "C. A shortage of available space or food",
      },
      {
        question: "What is the main characteristic of an ecological pyramid?",
        options: [
          "A. It shows the distribution of species in a community",
          "B. It represents energy flow through the trophic levels of an ecosystem",
          "C. It shows the physical boundaries of an ecosystem",
          "D. It represents the number of decomposers in an ecosystem",
        ],
        correct: "B. It represents energy flow through the trophic levels of an ecosystem",
      },
      {
        question: "Which of the following best describes a climax community?",
        options: [
          "A. A community that is constantly changing and evolving",
          "B. A community that experiences high rates of growth and diversity",
          "C. A stable and mature community that has reached equilibrium",
          "D. A community of organisms that survive only under extreme conditions",
        ],
        correct: "C. A stable and mature community that has reached equilibrium",
      },
      {
        question: "Which law in the Philippines governs the establishment of a National Integrated Protected Areas System (NIPAS) to conserve biodiversity?",
        options: [
          "a. Republic Act No. 9003 (Ecological Solid Waste Management Act)",
          "b. Republic Act No. 7586 (National Integrated Protected Areas System Act)",
          "c. Republic Act No. 6969 (Toxic Substances and Hazardous and Nuclear Waste Control Act)",
          "d. Republic Act No. 8749 (Philippine Clean Air Act)",
        ],
        correct: "b. Republic Act No. 7586 (National Integrated Protected Areas System Act)",
      },
      {
        question: "What is the primary objective of the Philippine Clean Water Act of 2004 (Republic Act No. 9275)?",
        options: [
          "a. To ensure proper waste management and recycling in all municipalities",
          "b. To provide a legal framework for managing and preserving marine ecosystems",
          "c. To protect the country's water bodies from pollution through a comprehensive water quality management program",
          "d. To establish regulations on the extraction of groundwater",
        ],
        correct: "c. To protect the country's water bodies from pollution through a comprehensive water quality management program",
      },
      {
        question: "Which government agency is responsible for the enforcement of the provisions of the Philippine Clean Air Act (Republic Act No. 8749)?",
        options: [
          "a. Department of Environment and Natural Resources (DENR)",
          "b. Department of Health (DOH)",
          "c. Department of Transportation (DOTr)",
          "d. Department of Energy (DOE)",
        ],
        correct: "a. Department of Environment and Natural Resources (DENR)",
      },
      {
        question: "Under the Philippine Environmental Impact Statement System (EIS), what type of project requires an Environmental Compliance Certificate (ECC) before proceeding?",
        options: [
          "a. Small-scale projects with minimal environmental impact",
          "b. Projects located in urban areas only",
          "c. Projects that may cause significant environmental impact",
          "d. Projects under 10,000 square meters in size",
        ],
        correct: "c. Projects that may cause significant environmental impact",
      },
      {
        question: "Republic Act No. 9003, known as the Ecological Solid Waste Management Act of 2000, mandates the creation of which of the following at the local government level?",
        options: [
          "a. Solid waste incineration facilities",
          "b. Ecological solid waste management plans",
          "c. National landfill sites",
          "d. National composting centers",
        ],
        correct: "b. Ecological solid waste management plans",
      },
      {
        question: "The estimated population of indigenous people which is composed of 110 tribes in the Philippines is almost:",
        options: [
          "A. 9-13 M",
          "B. 14-17 M",
          "C. 18-22 M",
          "D. 5-8 M",
        ],
        correct: "B. 14-17 M",
      },
      {
        question: "What is the longest river in the Philippines?",
        options: [
          "A) Pasig River",
          "B) Cagayan River",
          "C) Agusan River",
          "D) Pampanga River",
        ],
        correct: "B) Cagayan River",
      },
      {
        question: "The smallest type of settlement in the Philippines:",
        options: [
          "A. province",
          "B. city",
          "C. municipality",
          "D. barangay",
        ],
        correct: "D. barangay",
      },
      {
        question: "The largest type of settlement in the Philippines:",
        options: [
          "A. province",
          "B. city",
          "C. municipality",
          "D. barangay",
        ],
        correct: "A. province",
      },
      {
        question: "Which of the following is the smallest province in the Philippines by land area?",
        options: [
          "A) Batanes",
          "B) Palawan",
          "C) Siquijor",
          "D) Tawi-Tawi",
        ],
        correct: "A) Batanes",
      },
      {
        question: "Which island group in the Philippines is known for its rich biodiversity and UNESCO World Heritage Sites?",
        options: [
          "A) Mindanao",
          "B) Visayas",
          "C) Luzon",
          "D) Palawan",
        ],
        correct: "D) Palawan",
      },
      {
        question: "The Philippine Sea is located to the east of the country. Which of the following is true about the Philippine Sea?",
        options: [
          "A) It is part of the Pacific Ocean",
          "B) It is a separate body of water from the Pacific Ocean",
          "C) It is located between the Philippines and Indonesia",
          "D) It is primarily an inland sea",
        ],
        correct: "A) It is part of the Pacific Ocean",
      },
      {
        question: "What is the largest province in the Philippines by land area?",
        options: [
          "A) Palawan",
          "B) Mindoro",
          "C) Cebu",
          "D) Pangasinan",
        ],
        correct: "A) Palawan",
      },
      {
        question: "Which mountain in the Philippines is considered the highest peak?",
        options: [
          "A) Mt. Pulag",
          "B) Mt. Apo",
          "C) Mt. Banahaw",
          "D) Mt. Mayon",
        ],
        correct: "B) Mt. Apo",
      },
      {
        question: "Which of the following is the largest lake in the Philippines?",
        options: [
          "A) Laguna de Bay",
          "B) Taal Lake",
          "C) Lake Lanao",
          "D) Sampaloc Lake",
        ],
        correct: "A) Laguna de Bay",
      },
      {
        question: "What is the name of the strait that separates Luzon and Mindoro?",
        options: [
          "A) Balintang Channel",
          "B) Taal Strait",
          "C) Mindoro Strait",
          "D) Verde Island Passage",
        ],
        correct: "C) Mindoro Strait",
      },
      {
        question: "Which island in the Philippines is known for the historic Battle of Leyte Gulf during World War II?",
        options: [
          "A) Mindanao",
          "B) Luzon",
          "C) Leyte",
          "D) Palawan",
        ],
        correct: "C) Leyte",
      },
      {
        question: "Which body of water separates the islands of Cebu and Negros?",
        options: [
          "A) Sulu Sea",
          "B) Tañon Strait",
          "C) Mindanao Sea",
          "D) Philippine Sea",
        ],
        correct: "B) Tañon Strait",
      },
      {
        question: "An appraisal of current market value is considered to be accurate for",
        options: [
          "A. 90 days",
          "B. one year",
          "C. until the property is sold",
          "D. date of appraisal",
        ],
        correct: "D. date of appraisal",
      },
      {
        question: "The four forces that influence real estate values are",
        options: [
          "A. Social, economic, governmental, and environmental",
          "B. Land, labor, capital, and green space",
          "C. Eminent domain, police power, escheat, and taxation",
          "D. Governmental, social, taxation, and economic conditions",
        ],
        correct: "A. Social, economic, governmental, and environmental",
      },
      {
        question: "A principle in appraisal, which refers to the agents in production are labor, coordination, capital and land. Land has the last claim on the surplus productivity of the agents in production.",
        options: [
          "A. progression",
          "B. regression",
          "C. balance",
          "D. highest and best use",
        ],
        correct: "C. balance",
      },
      {
        question: "To adjust the sale price of a comparable sale with a 10% superior location, you should:",
        options: [
          "A. Add 10% to the price",
          "B. Subtract 10% from the price",
          "C. Multiply the price by 10%",
          "D. Multiply the price by 10%",
        ],
        correct: "B. Subtract 10% from the price",
      },
      {
        question: "It indicates the value of the property traded in the market which is referred to as market value:",
        options: [
          "A. Appraised Value",
          "B. Valuation",
          "C. Value in Use",
          "D. Value in Exchange",
        ],
        correct: "D. Value in Exchange",
      },
      {
        question: "Which of the following factors would not be important in comparing properties under the Market Data Approach?",
        options: [
          "A. difference in dates of sale",
          "B. difference in financing",
          "C. difference in appearance/condition",
          "D. difference in original cost",
        ],
        correct: "D. difference in original cost",
      },
      {
        question: "Linkages are",
        options: [
          "A. The devices used to change a property from one use to another",
          "B. The relationships between a buyer and seller in a real estate deal",
          "C. Time-distance relationships between a property use and the supporting facilities",
          "D. The tools necessary to market real estate",
        ],
        correct: "C. Time-distance relationships between a property use and the supporting facilities",
      },
      {
        question: "A parcel of land has the following features: area is 900 sqm., a corner lot, higher than the road, and almost rectangular in shape. If the prevailing price in the area is P10,000.00/sqm. and subject lot has corner influence of 15%, topographic value of 5% because of low elevation, and plottage value of 10% because of shape, what is the fair market value of the lot?",
        options: [
          "A. P9,000,000.00",
          "B. P11,700,000.00",
          "C. P10,800,000.00",
          "D. P10,350,000.00",
        ],
        correct: "C. P10,800,000.00",
      },
      {
        question: "Added value inherent on a lot bounded by two streets",
        options: [
          "A. Plottage",
          "B. Location",
          "C. Corner Influence",
          "D. Shape",
        ],
        correct: "C. Corner Influence",
      },
      {
        question: "The Cost Approach results in the most accurate appraisal of:",
        options: [
          "A. an old building",
          "B. a single family residence",
          "C. a new building",
          "D. a vacant lot",
        ],
        correct: "C. a new building",
      },
      {
        question: "Method of estimating the RCN in which the original costs is adjusted to current costs by a multiplier derived from published cost indexes.",
        options: [
          "A. Quantity survey method",
          "B. Cost-in-place method",
          "C. Index or trending method",
          "D. Cost estimation",
        ],
        correct: "C. Index or trending method",
      },
      {
        question: "A vacant lot is rented for a car display for P24,000 per month. The interest rate applicable to this type of property is 8%. Compute the value of property by income approach:",
        options: [
          "A. P2,400,000",
          "B. P2,600,000",
          "C. P2,800,000",
          "D. P3,600,000",
        ],
        correct: "D. P3,600,000",
      },
      {
        question: "A capitalization process that applies an overall rate, or all risks yield, which, when divided into a single year's or established net operating income, produces a value indication.",
        options: [
          "A. Yield capitalization",
          "B. Direct capitalization",
          "C. Discounted cash flow",
          "D. Sinking capitalization",
        ],
        correct: "B. Direct capitalization",
      },
      {
        question: "A building has a rental income of P350 per month. Using the monthly gross rent multiplier of 125, the value of the building would be estimated at:",
        options: [
          "A. P35,714",
          "B. P437,500",
          "C. P43,750",
          "D. P357,140",
        ],
        correct: "B. P437,500",
      },
      {
        question: "What is the Gross Rent Multiplier (GRM) for this property?",
        options: [
          "A. 125",
          "B. 100",
          "C. 1250",
          "D. 350",
        ],
        correct: "A. 125",
      },
      {
        question: "Which of the following refers to reconciliation?",
        options: [
          "A. loss of value due to anything",
          "B. the process by which the appraiser determines highest and best use",
          "C. separating the value of the land from the total value of the property",
          "D. analyzing the results of the 3 approaches to value to determine the final estimate of value",
        ],
        correct: "D. analyzing the results of the 3 approaches to value to determine the final estimate of value",
      },
      {
        question: "In this technique under the income approach, the land value is estimated as the present value of the residual income attributable to the land of an income producing property.",
        options: [
          "A. Property residual technique",
          "B. Land residual technique",
          "C. Building residual technique",
          "D. Ground rent multiplier",
        ],
        correct: "B. Land residual technique",
      },
      {
        question: "In the appraisal of a residential property in a suburban neighborhood, you have noted that the property is well-maintained but is situated next to a major highway. Which factor would most likely affect the appraised value of this property?",
        options: [
          "A) The proximity to the major highway",
          "B) The property's square footage",
          "C) The age of the property",
          "D) The current market demand for homes in suburban neighborhoods",
        ],
        correct: "A) The proximity to the major highway",
      },
      {
        question: "You are assessing a commercial office building for its income-producing potential. The property generates P120,000 in annual rental income, and you are expecting a 10% capitalization rate for similar properties in the area. What is the appraised value of the property using the income approach?",
        options: [
          "A) PHP1,200,000",
          "B) PHP1,000,000",
          "C) PHP1,500,000",
          "D) PHP1,800,000",
        ],
        correct: "B) PHP1,000,000",
      },
      {
        question: "Which appraisal approach is the appraiser most likely using in this scenario?",
        options: [
          "A) Sales comparison approach",
          "B) Cost approach",
          "C) Income approach",
          "D) Gross rent multiplier method",
        ],
        correct: "B) Cost approach",
      },
      {
        question: "Julio is evaluating a property that has experienced significant physical deterioration and needs major repairs. Julio determines the cost to replace the property but adjusts for depreciation due to its age and condition. What is the process called that Julio?",
        options: [
          "A) Functional obsolescence",
          "B) Economic obsolescence",
          "C) Depreciation",
          "D) Highest and best use",
        ],
        correct: "C) Depreciation",
      },
      {
        question: "You are conducting an appraisal on a newly constructed luxury home. You have determined that the property's value will be primarily determined by the costs to build the house, excluding the land value. Which approach is the appraiser most likely using to value the property?",
        options: [
          "A) Sales comparison approach",
          "B) Cost approach",
          "C) Income approach",
          "D) Replacement cost approach",
        ],
        correct: "B) Cost approach",
      },
      {
        question: "You are tasked with valuing a building that generates PHP30,000 in annual income. The building has an annual operating expense of PHP10,000. The appraiser uses a 12% capitalization rate to estimate the property's value. What is the net operating income (NOI) for the property?",
        options: [
          "A) PHP20,000",
          "B) PHP30,000",
          "C) PHP40,000",
          "D) PHP10,000",
        ],
        correct: "A) PHP20,000",
      },
      {
        question: "You must adjust for depreciation when determining the property's current value. Which type of depreciation is most likely to affect this property?",
        options: [
          "A) Economic obsolescence",
          "B) Functional obsolescence",
          "C) Physical depreciation",
          "D) Tax depreciation",
        ],
        correct: "C) Physical depreciation",
      },
      {
        question: "Compute the monthly amortization factor if the paying period is 60 months and interest is 1% per month?",
        options: [
          "A. 0.03233",
          "B. 0.02223",
          "C. 0.22223",
          "D. 0.22234",
        ],
        correct: "B. 0.02223",
      },
      {
        question: "At 18% interest per annum, how much is the interest of P500,000 for 65 days?",
        options: [
          "A. P15,000",
          "B. P16,028",
          "C. P16,250",
          "D. P90,000",
        ],
        correct: "B. P16,028",
      },
      {
        question: "What is the unit cost of the residential subdivision if the raw land was acquired at P800.00 per square meter while estimated development cost per square meter is P1,000.00. The maximum saleable area because of the terrain is only 60%?",
        options: [
          "A. P800.00",
          "B. P1,000.00",
          "C. P1,800.00",
          "D. P3,000.00",
        ],
        correct: "D. P3,000.00",
      },
      {
        question: "Ms. Buaya owns a 240 square meters rectangular lot with a 12-meter frontage. She wanted to enclose it with a fence made of hollow blocks, 1.7 meters high above the ground with 0.3 meters below the ground. The fence cost P850.00 per square meter. How much will the fencing cost if a 4-meter wide steel gate costing P20,000.00 is installed?",
        options: [
          "A. P115,000.00",
          "B. P116,000.00",
          "C. P120,000.00",
          "D. P122,000.00",
        ],
        correct: "D. P122,000.00",
      },
      {
        question: "A rectangular site measures 12.5 meters (frontage) by 25.6 meters (depth), of which 2.6 meters is in the public right-of-way. What is the gross and net site area?",
        options: [
          "A. 0.66 ha gross & 0.75 ha net",
          "B. 386.56 sq. m. gross & 320 sq. m. net",
          "C. 320 sq. m. gross & 287.5 sq. m. net",
          "D. 351 sq. m. gross & 320 sq. m. net",
        ],
        correct: "C. 320 sq. m. gross & 287.5 sq. m. net",
      },
      {
        question: "The Following are DHSUD Bureaus, EXCEPT",
        options: [
          "A. ELU-UNDB",
          "B. HREDRB",
          "C. HACDB",
          "D. HSACB",
        ],
        correct: "D. HSACB",
      },
    ],
  },
];
