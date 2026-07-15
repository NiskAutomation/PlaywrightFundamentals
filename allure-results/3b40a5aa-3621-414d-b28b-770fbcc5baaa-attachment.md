# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\248_TestVWODashboard.spec.ts >> VWO Session Storage Navigation >> go to direct to dashboard - no login
- Location: tests\04_Session_Storage\248_TestVWODashboard.spec.ts:6:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('main')
Expected: visible
Error: strict mode violation: locator('main') resolved to 2 elements:
    1) <main aria-label="Setup content" class="H(100%) login-successful">…</main> aka getByLabel('Setup content')
    2) <main ng-class="getMainWrapClassList()" aria-label="Application main content" class="main-wrap faux-wrapper top-banner faux-wrapper--full faux-wrapper--none">…</main> aka getByRole('main', { name: 'Application main content' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('main')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - paragraph [ref=e5]: Welcome to Wingify! app.vwo.com has transitioned to app.wingify.com. Your plans, features, and data remain unchanged.
        - link "Learn More" [ref=e6] [cursor=pointer]:
          - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
          - text: Learn More
          - img [ref=e7]
      - button "Close" [ref=e9] [cursor=pointer]:
        - img [ref=e10]
    - generic:
      - navigation:
        - navigation "Main navigation" [ref=e12]:
          - list [ref=e13]:
            - listitem [ref=e14]:
              - link "Go to Dashboard" [ref=e15] [cursor=pointer]:
                - /url: "#/dashboard"
                - img [ref=e16]
                - generic [ref=e18]: Dashboard
            - listitem [ref=e19]:
              - button "Testing menu" [ref=e20] [cursor=pointer]:
                - img [ref=e21]
                - generic [ref=e23]: Testing
                - img [ref=e24]
              - generic [ref=e26] [cursor=pointer]: A/B
              - generic [ref=e27] [cursor=pointer]: Multivariate
              - generic [ref=e28] [cursor=pointer]: Split URL
            - listitem [ref=e29]:
              - button "Insights menu" [ref=e30] [cursor=pointer]:
                - img [ref=e31]
                - generic [ref=e33]: Insights
                - img [ref=e34]
              - generic [ref=e36] [cursor=pointer]: Dashboard
              - generic [ref=e37] [cursor=pointer]: Metric Reports
              - generic [ref=e38] [cursor=pointer]: Funnel Reports
              - generic [ref=e39] [cursor=pointer]: Heatmaps
              - generic [ref=e40] [cursor=pointer]: Session Recordings
              - generic [ref=e41] [cursor=pointer]: Mobile Recordings
              - generic [ref=e42] [cursor=pointer]: Forms
            - listitem [ref=e43]:
              - button "Insights menu" [ref=e44] [cursor=pointer]:
                - img [ref=e45]
                - generic [ref=e47]: Pulse
                - img [ref=e48]
              - generic [ref=e50] [cursor=pointer]: Surveys
              - generic [ref=e51] [cursor=pointer]: Concept Test
              - generic [ref=e52] [cursor=pointer]: Templates
              - generic [ref=e53] [cursor=pointer]: Settings
            - listitem [ref=e54]:
              - button "Feature Experimentation" [ref=e55] [cursor=pointer]:
                - img [ref=e56]
                - generic [ref=e58]: Feature Experimentation
                - img [ref=e59]
              - generic [ref=e61] [cursor=pointer]: Feature Flags
              - generic [ref=e62] [cursor=pointer]: Flag Rollout
              - generic [ref=e63] [cursor=pointer]: Flag Testing
              - generic [ref=e64] [cursor=pointer]: Flag Multivariate
              - generic [ref=e65] [cursor=pointer]: Flag Personalize
              - generic: Tech Debt
            - listitem [ref=e66]:
              - link "Go to Personalize" [ref=e67] [cursor=pointer]:
                - /url: "#/target/targeting"
                - img [ref=e68]
                - generic [ref=e70]: Personalize
            - listitem [ref=e71]:
              - link "Go to Web Rollout" [ref=e72] [cursor=pointer]:
                - /url: "#/deploy/experience"
                - img [ref=e73]
                - generic [ref=e76]: Web Rollout
            - listitem [ref=e77]:
              - button "Data360 menu" [ref=e78] [cursor=pointer]:
                - img [ref=e79]
                - generic [ref=e81]: Data360
                - img [ref=e82]
              - generic [ref=e84] [cursor=pointer]: Introduction
              - generic [ref=e85] [cursor=pointer]: Profiles
              - generic [ref=e86] [cursor=pointer]: Attributes
              - generic [ref=e87] [cursor=pointer]: Events
              - generic [ref=e88] [cursor=pointer]: Segments
              - generic [ref=e89] [cursor=pointer]: Triggers
              - generic [ref=e90] [cursor=pointer]: Metrics
              - generic [ref=e91] [cursor=pointer]: Funnels
              - generic: Audit
            - listitem [ref=e92]:
              - button "Plan menu" [ref=e93] [cursor=pointer]:
                - img [ref=e95]
                - generic [ref=e97]: Plan
                - img [ref=e98]
              - generic [ref=e100] [cursor=pointer]: Observations
              - generic [ref=e101] [cursor=pointer]: Hypotheses
              - generic [ref=e102] [cursor=pointer]: Ideas
            - listitem
            - listitem [ref=e103]:
              - link "Go to Video Library" [ref=e104] [cursor=pointer]:
                - /url: "#/video-library/"
                - img [ref=e105]
                - generic [ref=e107]: Video Library
              - link "Go to Upgrade" [ref=e108] [cursor=pointer]:
                - /url: "#/settings/upgrade/testing"
                - img [ref=e109]
                - generic [ref=e111]: Upgrade
              - button "Configurations menu" [ref=e112] [cursor=pointer]:
                - img [ref=e113]
                - generic [ref=e115]: Configurations
                - img [ref=e116]
              - generic [ref=e118] [cursor=pointer]: Websites and Apps
              - generic [ref=e119] [cursor=pointer]: Integrations
              - generic [ref=e120] [cursor=pointer]: Pages
            - listitem [ref=e121]:
              - link "Go to Settings" [ref=e122] [cursor=pointer]:
                - /url: "#/settings/accounts/general"
                - img [ref=e123]
                - generic [ref=e125]: Settings
            - listitem [ref=e126]:
              - link "View Product Updates (opens in new tab)" [ref=e127] [cursor=pointer]:
                - /url: http://vwo.com/product-updates
                - img [ref=e128]
                - generic [ref=e130]: Updates
                - img [ref=e132]
              - button "Toggle navigation menu" [ref=e135] [cursor=pointer]:
                - img [ref=e136]
    - banner [ref=e138]:
      - link "Go to dashboard" [ref=e140] [cursor=pointer]:
        - /url: "#/dashboard"
        - img "Wingify ABTasty logo" [ref=e141]
      - generic [ref=e142]:
        - generic [ref=e143]:
          - generic [ref=e145]:
            - button "Your trial is over" [ref=e146] [cursor=pointer]:
              - generic [ref=e147]: Your trial is over
            - button "Upgrade" [ref=e148] [cursor=pointer]
          - generic [ref=e151]:
            - 'button "Selected value: Singleuseemail" [ref=e158] [cursor=pointer]':
              - generic [ref=e160]:
                - generic [ref=e161]: Singleuseemail
                - generic [ref=e162]: "#1227004"
              - img [ref=e163]
            - button "Copy account ID to clipboard" [ref=e165] [cursor=pointer]:
              - img [ref=e166]
          - button "Need Help?" [ref=e172] [cursor=pointer]:
            - img [ref=e173]
            - generic [ref=e175]: Need Help?
          - button "View Account Usage Activity" [ref=e181] [cursor=pointer]:
            - img [ref=e182]
          - generic "Notifications" [ref=e186]:
            - dialog "Notification dialog" [ref=e187]:
              - button "Open notifications" [ref=e188] [cursor=pointer]:
                - img [ref=e189]
        - button "Open user menu" [ref=e193] [cursor=pointer]:
          - img "csadadsa dasdas" [ref=e194]
    - main "Application main content" [ref=e195]:
      - generic [ref=e201]:
        - list [ref=e203]:
          - listitem [ref=e204] [cursor=pointer]:
            - button "View dashboard" [ref=e206]: Dashboard
          - listitem [ref=e207] [cursor=pointer]:
            - button "Get started with Wingify" [ref=e208]: Get Started
          - listitem [ref=e209] [cursor=pointer]:
            - button "View campaigns overview" [ref=e211]: Campaigns Overview
        - generic [ref=e213]:
          - generic [ref=e214]:
            - img [ref=e216]
            - generic [ref=e218]:
              - heading "Dashboard" [level=4] [ref=e219]
              - paragraph [ref=e220]: Hi csadadsa dasdas, here's an overview of your experience optimization journey
            - list [ref=e222]:
              - listitem [ref=e223]:
                - img "Notification banner image" [ref=e224]
                - generic [ref=e225]:
                  - heading "Wingify Chrome Extension" [level=6] [ref=e226]
                  - paragraph [ref=e227]: For enhanced capabilities in Wingify
                - generic "Install" [ref=e229] [cursor=pointer]
          - generic [ref=e231]:
            - generic [ref=e232]:
              - img [ref=e233]
              - generic [ref=e235]: Trial expired? But why stop now? Extend your trial for 7 more days!
              - button "Extend Trial" [ref=e236] [cursor=pointer]
              - button [ref=e237] [cursor=pointer]:
                - img [ref=e238]
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - heading "Active tests" [level=5]:
                        - generic: Active tests
                    - generic:
                      - list:
                        - listitem
                        - listitem
                        - listitem
                - generic:
                  - generic:
                    - generic:
                      - heading "Untested hypotheses" [level=5]:
                        - generic: Untested hypotheses
                    - generic:
                      - generic:
                        - generic:
                          - img "Hypothesis empty"
                          - heading "No hypothesis created" [level=5]
                          - paragraph: Start building your hypotheses backlog.
                          - link "Create new hypothesis":
                            - /url: "#/plan/hypotheses/listview"
                            - text: Create Hypothesis
          - img [ref=e240]
      - generic [ref=e244]:
        - list [ref=e246]:
          - listitem [ref=e247] [cursor=pointer]:
            - button "Get Support" [ref=e248]:
              - img [ref=e249]
              - generic [ref=e251]: Get Support
          - listitem [ref=e252] [cursor=pointer]:
            - link "Developer resources" [ref=e253]:
              - /url: "#/developers"
              - img [ref=e254]
              - generic [ref=e256]: Developer resources
          - listitem [ref=e257] [cursor=pointer]:
            - link "Give us a call" [ref=e258]:
              - /url: tel:+14153493207
              - img [ref=e259]
              - generic [ref=e261]: +1-415-349-3207
        - list [ref=e263]:
          - listitem [ref=e264] [cursor=pointer]:
            - button "Show logged in users" [ref=e265]:
              - img [ref=e266]
              - generic [ref=e268]: Show logged in users
          - listitem [ref=e269] [cursor=pointer]:
            - link "Uptime Status" [ref=e270]:
              - /url: https://secure-stats.pingdom.com/yd4ybaf8hhh2
              - img [ref=e271]
              - generic [ref=e273]: Uptime Status
        - generic [ref=e275]:
          - link "Visit wingify.com" [ref=e276] [cursor=pointer]:
            - /url: https://wingify.com
            - img "Wingify logo" [ref=e277]
          - generic [ref=e278]:
            - img [ref=e279]
            - generic [ref=e281]: Language option is now under your profile icon in the top bar.
  - img [ref=e282]:
    - generic: "'"
    - generic:
      - img
  - img [ref=e283]
  - img [ref=e284]
  - img [ref=e285]
  - img [ref=e286]
  - img [ref=e287]
  - img [ref=e288]
  - img [ref=e289]
  - img [ref=e290]
  - img [ref=e291]
  - img [ref=e292]
  - img [ref=e293]
  - img [ref=e294]
  - img [ref=e295]
  - img [ref=e296]
  - img [ref=e297]
  - img [ref=e298]
  - img [ref=e299]
  - textbox [ref=e300]
  - dialog "modal-header-1" [ref=e301]:
    - generic [ref=e303]:
      - button "Close" [ref=e305] [cursor=pointer]:
        - img [ref=e306]
      - generic [ref=e310]:
        - generic [ref=e311]:
          - generic [ref=e313]:
            - img "Background box" [ref=e314]
            - img [ref=e316]
            - generic [ref=e318]:
              - img [ref=e319]
              - generic [ref=e321]: Expired
          - heading "Extend your trial" [level=3] [ref=e322]
          - paragraph [ref=e323]:
            - text: Your free trial for Wingify Testing
            - strong [ref=e324]: is expired
            - text: ", but"
            - text: why stop now? Extend your trial for 7 more days!
          - list [ref=e325]:
            - listitem [ref=e326]:
              - img [ref=e327]
              - text: Keep experimenting without interruptions
            - listitem [ref=e329]:
              - img [ref=e330]
              - text: Make data-driven decisions
            - listitem [ref=e332]:
              - img [ref=e333]
              - text: Maximize your optimization insights
          - paragraph [ref=e335]:
            - img [ref=e336]
            - generic [ref=e338]: Extend your trial until 22 Jul 2026. Continue where you left off!
        - generic [ref=e339]:
          - button "Cancel" [active] [ref=e340] [cursor=pointer]
          - button "Extend Trial" [ref=e341] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test.describe('VWO Session Storage Navigation', () => {
  4  |     test.use({storageState: './user-session.json'});
  5  | 
  6  |     test('go to direct to dashboard - no login', async ({page})=>{
  7  |         await test.step('VWO Step: Open dashboard directly using saved session', async () => {
  8  |             await page.goto('https://app.wingify.com/#/dashboard/get-started?accountId=1227004');
  9  |         });
  10 | 
  11 |         await test.step('VWO Step: Verify dashboard route is loaded', async () => {
  12 |             await expect(page).toHaveURL(/#\/dashboard/);
> 13 |             await expect(page.locator('main')).toBeVisible();
     |                                                ^ Error: expect(locator).toBeVisible() failed
  14 |         });
  15 | 
  16 |         await test.step('VWO Step: Keep dashboard visible for observation', async () => {
  17 |             console.log('Directly navigated to dashboard without login');
  18 |             await page.waitForTimeout(1000);
  19 |         });
  20 | 
  21 |     });
  22 | 
  23 |     test('go to direct to settings - no login - using storageState', async ({page})=>{
  24 |         await test.step('VWO Step: Open account settings directly using saved session', async () => {
  25 |             await page.goto('https://app.wingify.com/#/settings/accounts/general?accountId=1227004');
  26 |         });
  27 | 
  28 |         await test.step('VWO Step: Verify settings route is loaded', async () => {
  29 |             await expect(page).toHaveURL(/#\/(settings|dashboard)/);
  30 |             await expect(page).not.toHaveURL(/#\/login/);
  31 |             await expect(page.locator('main')).toBeVisible();
  32 |         });
  33 | 
  34 |         await test.step('VWO Step: Keep settings page visible for observation', async () => {
  35 |             console.log('Directly navigated to settings without login using storageState');
  36 |             await page.waitForTimeout(1000);
  37 |         });
  38 |     });
  39 | });
```