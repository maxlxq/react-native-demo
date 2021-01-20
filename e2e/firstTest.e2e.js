

describe('首页测试', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('启动', async () => {
    await expect(element(by.id('on_set_badge'))).toBeVisible();
  });

  it('点击后改变主页Tab的角标', async () => {
    await element(by.id('on_set_badge')).tap();
    await element(by.id('on_set_badge')).multiTap(3);
    // await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('切换主题颜色', async () => {
    await element(by.id('on_press_setting')).tap();
    await element(by.id('on_change_theme')).tap();
    await element(by.id('header-back')).tap();
  });

  it('进入抽屉页面', async () => {
    await element(by.id('on_press_drawer')).tap();
    await element(by.id('header-back')).tap();
  });

  it('进入文章详情', async () => {
    await element(by.id('on_press_article')).tap();
    await element(by.id('article_input')).typeText('we are family?');
    await element(by.id('article_input')).tapBackspaceKey();
    await element(by.id('article_input')).typeText('!');
    await element(by.id('header-back')).tap();
  });
});
