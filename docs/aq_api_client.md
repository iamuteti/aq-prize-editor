# Method listing for AQ Prize Editor

## List of Scheduled Games

The list of games will be sourced from [http://fma-sdk.s3-website-ap-southeast-1.amazonaws.com/doc/aq-api-client/class/src/EngagementClient.js~EngagementClient.html#instance-method-getUserEngagements](EngagementClient.getUserEngagements). The following table describes the mapping of the UI element with the data fields returned by this method:

| UI Field | JSON field |
| :------: | :--------: |
| title    | `title`    |
| Game Type | `funType.name` |
| Publish Date | `publishDate` |
| Date Created | `createDate` |


## Game Type 3 (Tournament)

### Top Panel
The game information from the top panel will come from the selected item from the List of Scheduled Games.

### Middle Panel
The middle panel will be populated with data from [http://fma-sdk.s3-website-ap-southeast-1.amazonaws.com/doc/aq-api-client/class/src/GiftClient.js~GiftClient.html#instance-method-getTournament](GiftClient.getTournament). This will come from the `prizes` array of the result of this method.

| Table UI Field | JSON Field |
| :------------: | :--------- |
| Prize | `giftProduct.name` |
| Prize Type | 'By place'. Static, since this is onlye currently supported type at the meantime |
| From | `fromRank` |
| To | `toRank` |
| Limit | ??? |
| Quantity | `toRank` - `fromRank` + 1 |

## Bottom Panel
Prize dropdown will be sourced from [http://fma-sdk.s3-website-ap-southeast-1.amazonaws.com/doc/aq-api-client/class/src/GiftClient.js~GiftClient.html#instance-method-getUserGiftBalances](GiftClient.getUserGiftBalances). Only those with balance greater than zero should be displayed here. Quantity field is number inputted in *To* field less *From* field plus one.

### Validations
*From* rank should be greater than or equal to one
*To* rank should be greater than or equal to *From* field
Computed quantity should be equal or greater than balance of selected prize

### Saving

Call [http://fma-sdk.s3-website-ap-southeast-1.amazonaws.com/doc/aq-api-client/class/src/GiftClient.js~GiftClient.html#instance-method-addTournament](GiftClient.addTournament) if you are creating a new item. If updating an existing one, call (http://fma-sdk.s3-website-ap-southeast-1.amazonaws.com/doc/aq-api-client/class/src/GiftClient.js~GiftClient.html#instance-method-updateTournament)[GiftClient.updateTournament]



