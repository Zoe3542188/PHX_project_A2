import { Navigation } from "react-native-navigation";

export const startTabs = () => Navigation.setRoot({    
    root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              component: {
                name: 'Main',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Main',
                    icon: require('../assets/img/home.png')
                  }
                }
              },
            },
            {
              component: {
                name: 'Fetch',
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
                name: 'Podcasts',
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
            name: 'StackNav',
          }
        }
    ],
    }
  }
})
