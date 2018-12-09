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
                  id: 'SpeakingID',
                  name: 'Speaking',
                },
              },
           ],
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Speakings',
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
                name: 'Podcast',
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
                id: 'PerspID',
                name: 'perspectives',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: "Blogs",
                    icon: require('../assets/img/feedback.png')
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
          ],
        }
      }
  });
