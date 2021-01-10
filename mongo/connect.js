const extMain = require ('./main')

var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
require('dotenv').config();
const { MongoClient } = require("mongodb");

var collection;

// Replace the following with your Atlas connection string                                                                                                                                        
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        await mainFcns();
    } catch (err) {
        console.log(err.stack);
    }
    finally {
       await client.close();
       console.log("Disconnected");
    }
}
run().catch(console.dir);

var testCountry = {
    country: 'Canada',
    score: 0.8823529411764706 
}

async function mainFcns (){
  //  await extMain.deleteCountryByName(client,'Canada');
    //var test = await extMain.findOneListingByName(client,"Ribeira Charming Duplex");
  //  console.log(`${test} is number of bedrooms in the main part BEECH`);

        for ( i = 0; i < BigArray.length; i++){
        var tempCountry = BigArray[i];
          await extMain.createCountry(client,tempCountry);
       }

  //  await extMain.updateListingByName(client, "Infinite Views", { score: 0.1});

}

var BigArray = [
    { country: '', score: 0.17647058823529416 },
    { country: 'Australia', score: 1 },
    { country: 'Canada', score: 0.8823529411764706 },
    { country: 'Malta', score: 0.8823529411764706 },
    { country: 'Sweden', score: 0.8823529411764706 },
    { country: 'Austria', score: 0.8235294117647058 },
    { country: 'United Kingdom', score: 0.7647058823529411 },
    { country: 'Argentina', score: 0.7058823529411764 },
    { country: 'Netherlands', score: 0.7058823529411764 },
    { country: 'Spain', score: 0.7058823529411764 },
    { country: 'Uruguay', score: 0.7058823529411764 },
    { country: 'Denmark', score: 0.6470588235294117 },
    { country: 'Germany', score: 0.6470588235294117 },
    { country: 'Iceland', score: 0.6470588235294117 },
    { country: 'New Zealand', score: 0.6470588235294117 },
    { country: 'Portugal', score: 0.6470588235294117 },
    { country: 'Belgium', score: 0.588235294117647 },
    { country: 'Colombia', score: 0.588235294117647 },
    { country: 'Switzerland', score: 0.588235294117647 },
    { country: 'Finland', score: 0.5294117647058822 },
    { country: 'Luxembourg', score: 0.5294117647058822 },
    { country: 'Norway', score: 0.5294117647058822 },
    { country: 'Réunion', score: 0.5294117647058822 },
    { country: 'France', score: 0.47058823529411775 },
    { country: 'Gibraltar', score: 0.47058823529411775 },
    { country: 'Greenland', score: 0.47058823529411775 },
    { country: 'Ireland', score: 0.47058823529411775 },
    { country: 'Israel', score: 0.47058823529411775 },
    { country: 'Puerto Rico', score: 0.47058823529411775 },
    { country: 'South Africa', score: 0.47058823529411775 },
    { country: 'Taiwan', score: 0.47058823529411775 },
    { country: 'French Polynesia', score: 0.41176470588235303 },
    { country: 'New Caledonia', score: 0.41176470588235303 },
    { country: 'United States', score: 0.41176470588235303 },
    { country: 'Andorra', score: 0.3529411764705883 },
    { country: 'Guadeloupe', score: 0.3529411764705883 },
    { country: 'Martinique', score: 0.3529411764705883 },
    { country: 'Slovenia', score: 0.3529411764705883 },
    { country: 'Czech Republic', score: 0.2941176470588236 },
    { country: 'Estonia', score: 0.2941176470588236 },
    { country: 'Guam', score: 0.2941176470588236 },
    { country: 'Chile', score: 0.23529411764705888 },
    { country: 'Ecuador', score: 0.23529411764705888 },
    { country: 'Italy', score: 0.23529411764705888 },
    { country: 'Liechtenstein', score: 0.23529411764705888 },
    { country: 'Nepal', score: 0.23529411764705888 },
    { country: 'Slovakia', score: 0.23529411764705888 },
    { country: 'Thailand', score: 0.23529411764705888 },
    { country: 'India', score: 0.17647058823529416 },
    { country: 'Bermuda', score: 0.11764705882352944 },
    { country: 'Bolivia', score: 0.11764705882352944 },
    { country: 'Brazil', score: 0.11764705882352944 },
    { country: 'Croatia', score: 0.11764705882352944 },
    { country: 'Hungary', score: 0.11764705882352944 },
    { country: 'Mexico', score: 0.11764705882352944 },
    { country: 'Mozambique', score: 0.11764705882352944 },
    { country: 'Bosnia and Herzegovina', score: 0.05882352941176472 },
    { country: 'Botswana', score: 0.05882352941176472 },
    { country: 'Costa Rica', score: 0.05882352941176472 },
    { country: 'Cuba', score: 0.05882352941176472 },
    { country: 'Cyprus', score: 0.05882352941176472 },
    { country: 'Greece', score: 0.05882352941176472 },
    { country: 'South Korea', score: 0.05882352941176472 },
    { country: 'Macau', score: 0.05882352941176472 },
    { country: 'Seychelles', score: 0.05882352941176472 },
    { country: 'US Virgin Islands', score: 0.05882352941176472 },
    { country: 'Angola', score: 0 },
    { country: 'Cambodia', score: 0 },
    { country: 'incl.  Hong Kong', score: 0 },
    { country: 'El Salvador', score: 0 },
    { country: 'Fiji', score: 0 },
    { country: 'Japan', score: 0 },
    { country: 'Lesotho', score: 0 },
    { country: 'Lithuania', score: 0 },
    { country: 'Mongolia', score: 0 },
    { country: 'Panama', score: 0 },
    { country: 'San Marino', score: 0 },
    { country: 'Serbia', score: 0 },
    { country: 'Albania', score: -0.05882352941176472 },
    { country: 'Aruba', score: -0.05882352941176472 },
    { country: 'Benin', score: -0.05882352941176472 },
    { country: 'Bulgaria', score: -0.05882352941176472 },
    { country: 'Curaçao', score: -0.05882352941176472 },
    { country: 'Kosovo', score: -0.05882352941176472 },
    { country: 'Laos', score: -0.05882352941176472 },
    { country: 'Latvia', score: -0.05882352941176472 },
    { country: 'Mali', score: -0.05882352941176472 },
    { country: 'Monaco', score: -0.05882352941176472 },
    { country: 'Montenegro', score: -0.05882352941176472 },
    { country: 'Romania', score: -0.05882352941176472 },
    { country: 'Sint Maarten', score: -0.05882352941176472 },
    { country: 'Turkey', score: -0.05882352941176472 },
    { country: 'Armenia', score: -0.11764705882352944 },
    { country: 'Vietnam', score: -0.11764705882352944 },
    { country: 'British Virgin Islands', score: -0.11764705882352944 },
    { country: 'Cabo Verde', score: -0.11764705882352944 },
    { country: 'Guinea-Bissau', score: -0.11764705882352944 },
    { country: 'Kazakhstan', score: -0.11764705882352944 },
    { country: 'North Macedonia', score: -0.11764705882352944 },
    { country: 'Moldova', score: -0.11764705882352944 },
    { country: 'Nicaragua', score: -0.11764705882352944 },
    { country: 'Niger', score: -0.11764705882352944 },
    { country: 'Philippines', score: -0.11764705882352944 },
    { country: 'Singapore', score: -0.11764705882352944 },
    { country: 'Gabon', score: -0.17647058823529416 },
    { country: 'Belize', score: -0.17647058823529416 },
    { country: 'Georgia', score: -0.17647058823529416 },
    { country: 'Honduras', score: -0.17647058823529416 },
    { country: 'Kyrgyzstan', score: -0.17647058823529416 },
    { country: 'Peru', score: -0.17647058823529416 },
    { country: 'Poland', score: -0.17647058823529416 },
    { country: 'Ukraine', score: -0.17647058823529416 },
    { country: 'Burkina Faso', score: -0.23529411764705888 },
    { country: 'Myanmar', score: -0.23529411764705888 },
    { country: 'Sri Lanka', score: -0.23529411764705888 },
    { country: 'Vanuatu', score: -0.23529411764705888 },
    { country: 'Venezuela', score: -0.23529411764705888 },
    { country: 'Bhutan', score: -0.2941176470588235 },
    {
      country: 'Democratic Republic of the Congo',
      score: -0.2941176470588235
    },
    { country: 'Indonesia', score: -0.2941176470588235 },
    { country: 'Kenya', score: -0.2941176470588235 },
    { country: 'Lebanon', score: -0.2941176470588235 },
    { country: 'Mauritius', score: -0.2941176470588235 },
    { country: 'Namibia', score: -0.2941176470588235 },
    { country: 'Pakistan', score: -0.2941176470588235 },
    { country: 'Republic of the Congo', score: -0.2941176470588235 },
    { country: 'Rwanda', score: -0.2941176470588235 },
    { country: 'Samoa', score: -0.2941176470588235 },
    { country: 'Suriname', score: -0.2941176470588235 },
    { country: 'Syria', score: -0.2941176470588235 },
    { country: 'Tajikistan', score: -0.2941176470588235 },
    { country: 'Algeria', score: -0.3529411764705882 },
    { country: 'Antigua and Barbuda', score: -0.3529411764705882 },
    { country: 'Azerbaijan', score: -0.3529411764705882 },
    { country: 'Bahamas', score: -0.3529411764705882 },
    { country: 'Bahrain', score: -0.3529411764705882 },
    { country: 'Bangladesh', score: -0.3529411764705882 },
    { country: 'Barbados', score: -0.3529411764705882 },
    { country: 'Djibouti', score: -0.3529411764705882 },
    { country: 'Equatorial Guinea', score: -0.3529411764705882 },
    { country: 'Guatemala', score: -0.3529411764705882 },
    { country: 'Jordan', score: -0.3529411764705882 },
    { country: 'North Korea', score: -0.3529411764705882 },
    { country: 'Madagascar', score: -0.3529411764705882 },
    { country: 'Trinidad and Tobago', score: -0.3529411764705882 },
    { country: 'Tunisia', score: -0.3529411764705882 },
    { country: 'Vatican City', score: -0.3529411764705882 },
    { country: 'Belarus', score: -0.4117647058823529 },
    { country: 'Burundi', score: -0.4117647058823529 },
    { country: 'Dominican Republic', score: -0.4117647058823529 },
    { country: 'Grenada', score: -0.4117647058823529 },
    { country: 'Guyana', score: -0.4117647058823529 },
    { country: 'Ivory Coast', score: -0.4117647058823529 },
    { country: 'Oman', score: -0.4117647058823529 },
    { country: 'Paraguay', score: -0.4117647058823529 },
    { country: 'Sierra Leone', score: -0.4117647058823529 },
    { country: 'Central African Republic', score: -0.47058823529411764 },
    { country: 'Ghana', score: -0.47058823529411764 },
    { country: 'Liberia', score: -0.47058823529411764 },
    { country: 'Togo', score: -0.47058823529411764 },
    { country: 'Tonga', score: -0.47058823529411764 },
    { country: 'Brunei', score: -0.5294117647058824 },
    { country: 'Chad', score: -0.5294117647058824 },
    { country: 'Comoros', score: -0.5294117647058824 },
    { country: 'Cook Islands', score: -0.5294117647058824 },
    { country: 'Dominica', score: -0.5294117647058824 },
    { country: 'Ethiopia', score: -0.5294117647058824 },
    { country: 'Gambia', score: -0.5294117647058824 },
    { country: 'Haiti', score: -0.5294117647058824 },
    { country: 'Iraq', score: -0.5294117647058824 },
    { country: 'Jamaica', score: -0.5294117647058824 },
    { country: 'Maldives', score: -0.5294117647058824 },
    { country: 'Mauritania', score: -0.5294117647058824 },
    { country: 'Morocco', score: -0.5294117647058824 },
    { country: 'Papua New Guinea', score: -0.5294117647058824 },
    { country: 'Russia', score: -0.5294117647058824 },
    { country: 'Senegal', score: -0.5294117647058824 },
    { country: 'Solomon Islands', score: -0.5294117647058824 },
    { country: 'Eswatini', score: -0.5294117647058824 },
    { country: 'Uzbekistan', score: -0.5294117647058824 },
    { country: 'Zambia', score: -0.5294117647058824 },
    { country: 'Egypt', score: -0.5882352941176471 },
    { country: 'Eritrea', score: -0.5882352941176471 },
    { country: 'Indonesia', score: -0.5882352941176471 },
    { country: 'Kuwait', score: -0.5882352941176471 },
    { country: 'Sudan', score: -0.5882352941176471 },
    { country: 'Tanzania', score: -0.5882352941176471 },
    { country: 'Turkmenistan', score: -0.5882352941176471 },
    { country: 'Uganda', score: -0.5882352941176471 },
    { country: 'Zimbabwe', score: -0.5882352941176471 },
    { country: 'Cameroon', score: -0.6470588235294117 },
    { country: 'Malawi', score: -0.6470588235294117 },
    { country: 'Malaysia', score: -0.6470588235294117 },
    { country: 'Nigeria', score: -0.6470588235294117 },
    { country: 'Qatar', score: -0.6470588235294117 },
    { country: 'Afghanistan', score: -0.7058823529411764 },
    { country: 'Libya', score: -0.7058823529411764 },
    { country: 'United Arab Emirates', score: -0.7058823529411764 },
    { country: 'Yemen', score: -0.7647058823529411 },
    { country: 'Iran', score: -0.8823529411764706 },
    { country: 'Saudi Arabia', score: -0.8823529411764706 },
    { country: 'Somalia', score: -0.9411764705882353 },
    { country: 'Russia', score: -1 }
    ]
    