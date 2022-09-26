
const apiCalls = [{
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=new%20york&locale=*&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=new%20york&locale=*&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=new%20york&locale=*&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=new%20york&locale=*&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=los%20angeles&locale=*&size=200&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=los%20angeles&locale=*&size=200&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=los%20angeles&locale=*&size=200&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&keyword=los%20angeles&locale=*&size=200&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=2&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=2&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=2&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=2&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=3&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=3&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=3&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=3&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=IE&size=200&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=IE&size=200&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=IE&size=200&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=IE&size=200&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=GB&size=200&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=GB&size=200&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=GB&size=200&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=GB&size=200&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=AU&size=200&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=AU&size=200&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=AU&size=200&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=AU&size=200&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=CA&size=200&segmentId=KZFzniwnSyZfZ7v7nE`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=CA&size=200&segmentId=KZFzniwnSyZfZ7v7nJ`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=CA&size=200&segmentId=KZFzniwnSyZfZ7v7n1`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=CA&size=200&segmentId=KZFzniwnSyZfZ7v7na`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=FR&size=200`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=FI&size=200`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=US&size=200&page=2&segmentId=KZFzniwnSyZfZ7v7nJ`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=SE&size=200`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=DE&size=200`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=IT&size=200`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=BE&size=200`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=ES&size=200`
    },
    {
        1: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=MX&size=200&page=1`,
        2: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=MX&size=200&page=2`,
        3: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=MX&size=200&page=3`,
        4: `https://app.ticketmaster.com/discovery/v2/events?apikey=rybaSZbAsGTyVHpT4MjpWMbbiJIQpYGD&locale=*&countryCode=MX&size=200&page=4`
    },
]

module.exports = apiCalls



// const segmentId = {
//     'sports': `KZFzniwnSyZfZ7v7nE`,
//     'music': `KZFzniwnSyZfZ7v7nJ`,
//     'misc': `KZFzniwnSyZfZ7v7n1`,
//     'arts&Theatre': `KZFzniwnSyZfZ7v7na`,
// }