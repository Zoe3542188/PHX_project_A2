import { Navigation } from "react-native-navigation";

// create tab navigation at the bottom of the screen
export const startTabs = () => Navigation.setRoot({    
    root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [{
            stack: {
              children: [
              {
                component: {
                  id: 'PerspID',
                  name: 'Main',
                },
              },
           ],
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Main',
                  icon: require('../assets/img/home.png')
                }
              }              
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
                id: 'DownloadsID',
                name: 'Downloads',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: "Downloads",
                    icon: require('../assets/img/download.png')
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
