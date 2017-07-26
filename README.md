# useful_function
The useful function for responsive design.

<strong>flash_detect.min.js</strong> - For detect the browser is support flash or not.<br />
<strong>html5.js</strong> - For IE8 to support HTML5.<br />
<strong>respond.js</strong> - For IE8 to support Media Queries.

<strong>Device.getDevice()</strong><br />
Get the device accoring browser size.<br />
@return - String

<strong>Responsivebase.get_real_device()</strong><br />
Get the real device or browser.

<strong>Responsivebase.browser_flash_support()</strong><br />
Verify Flash support.

<strong>Responsivebase.jump_to_element(element)</strong><br />
Jumps the display to the position of a given element.<br />
element - Will scroll to this element.

<strong>Responsivebase.set_height(element, reset, parent)</strong><br />
Set the elements have the same height.<br />
element - The elements that need set same height.<br />
reset   - Is set reset the height, Boolean.<br />
parent  - The element's parent also need set the same height.

<strong>Responsivebase.resize_media_elements()</strong><br />
Resize media elements acording to browser size.

## Developing with compass:

### 1. Install [ruby](https://www.ruby-lang.org), windows can use [RubyInstaller](http://rubyinstaller.org/).

### 2. Install [nodejs](https://nodejs.org/).

### 3. Install [compass](http://compass-style.org/).

### 4. Open terminal, then:

```bash
npm install --global gulp
cd /your/path/to/accessibility_tool/src/
npm install
`npm start` for developing
`npm run build` before commit
```
