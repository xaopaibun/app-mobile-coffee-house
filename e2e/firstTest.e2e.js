describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('login'))).toBeVisible();
    await expect(element(by.id('inputEmail'))).toBeVisible();
    await expect(element(by.id('inputPassword'))).toBeVisible();
    await expect(element(by.id('btnSubmit'))).toBeVisible();
  });

  it('should show error message after submit form', async () => {
    await element(by.id('btnSubmit')).tap();
    await expect(element(by.text('Email is a required field'))).toBeVisible();
    await expect(element(by.text('Password is a required field'))).toBeVisible();
  });

  it('should show home screen after submit form', async () => {
    await element(by.id('inputEmail')).typeText('nowhere@react-plus.com\n');
    await element(by.id('inputPassword')).typeText('reactplus@123\n');
    await element(by.id('btnSubmit')).tap();
    await expect(element(by.text('Home screen'))).toBeVisible();
  });
});
