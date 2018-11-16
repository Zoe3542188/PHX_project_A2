import { Navigation } from "react-native-navigation";

// create tab navigation at the bottom of the screen
export const startTabs = () => Navigation.setRoot({    
    root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [{
            stack: {
              children: [{
              component: {
                id: 'MainID',
                name: 'Main',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Main',
                    icon: require('../assets/img/home.png')
                  }
                }
              },
              }]
            }
          },
            {
              component: {
                id: 'WebinarsID',                
                name: 'Webinars',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: "Webinars",
                    icon: require('../assets/img/webinar.png')
                  }
                }
              },
            },                        
            {
              component: {
                id: 'PodcastID',                
                name: 'displayPodList',
                options: {
                  bottomTab: {
                    text: 'Podcasts',
                    fontSize: 12,
                    icon: require('../assets/img/podcast.png')
                  }
                }
              },
            },
           {
              component: {
                id: 'EventsID',
                name: 'Events',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: "Events",
                    icon: require('../assets/img/calendar.png')
                  }
                }
              },
            },             
            {
              component: {
                id: 'FeedbackID',
                name: 'Feedback',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: "Contact us",
                    icon: require('../assets/img/feedback.png')
                  }
                }
              },
            },             
          ],
        }
      }
  });

export const startStacks = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'perspStack',
          }
        }
    ],
    }
  }
})
