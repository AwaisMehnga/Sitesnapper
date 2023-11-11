const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    height: '90vh',
    width: 'auto',
    storageManager: false,
    panels: { defaults: [] },
    // Block MAnager
    blockManager: {

        appendTo: '#blocks',



        blocks: [

            // sections
            // 1 sec
            {
                category: 'sections',
                id: 'section1',
                label: '1x-▭',
                attributes: {
                    class: 'AM-Section-1',
                    id: 'mw'
                },
                content: `
                <div id="i3vm" class="gjs-row" >
                <div id="gjs-cell">
                </div>
              </div>
               <style>
               .gjs-row{
                display:flex;
                justify-content:flex-start;
                align-items:stretch;
                flex-wrap:nowrap;
                padding:10px;
              }
              #gjs-cell{
                min-height:75px;
                flex-grow:1;
                flex-basis:100%;
              }
              @media (max-width: 768px){
                .gjs-row{
                  flex-wrap:wrap;
                }
              }
               </style>
                `,
            },
            // sec 2
            {
                id: 'section2',
                category: 'sections',
                label: '2x-▭',
                attributes: { class: 'AM-Section-2' },
                content: `
                <div class="res-container-1">
                <div class="two-sec-1"></div>
                <div class="two-sec-2"></div>
                </div>
                <style>

.res-container-1 {
  display: flex;
  flex-direction: row;
  height:50px;
  
}

.two-sec-1 {
  flex: 50%;
  height:40px;
  margin:5px;

}

.two-sec-2 {
  flex: 50%;
  height:40px;
  margin:5px;
}

@media (max-width: 480px) {
  .res-container-1 {
    flex-direction: column;
    height:100px;
  }
}
</style>
                `,
            },
            // sec 3
            {
                id: 'section3',

                category: 'sections',
                label: '3x-▭',
                attributes: { class: 'AM-Section-3' },
                content: `
                <div class="res-container-2">
                <div class="three-sec-1"></div>
                <div class="three-sec-2"></div>
                <div class="three-sec-3"></div>
                </div>
                <style>

.res-container-2 {
  display: flex;
  flex-direction: row;
  height:50px;
}

.three-sec-1 {
  flex: 33%;
  height:40px;
  margin:5px;
}

.three-sec-2 {
  flex: 33%;
  height:40px;
  margin:5px;
}
.three-sec-3 {
    flex: 33%;
    height:40px;
    margin:5px;
  }

@media (max-width: 480px) {
  .res-container-2 {
    flex-direction: column;
    height:150px;
  }
}
</style>
                `,
            },
            // text
            {
                id: 'paragraph',
                label: 'T',
                category: 'Text',
                content: '<p>Mehngi web is a free online tool for developers and students</p>'

            }, {
                id: 'link',
                label: 'link',
                content: '<a>Helo</a>',
                category: 'Text'
            }, {
                id: 'h1',
                label: 'h1',
                category: 'Text',
                content: '<h1>Mehngi Web</h1>'

            }, {
                id: 'h2',
                label: 'h2',
                category: 'Text',
                content: '<h2>Mehngi Web</h2>'

            }, {
                id: 'h3',
                label: 'h3',
                category: 'Text',
                content: '<h3>Mehngi Web</h3>'

            }, {
                id: 'h4',
                label: 'h4',
                category: 'Text',
                content: '<h4>Mehngi Web</h4>'

            }, {
                id: 'h5',
                label: 'h5',
                category: 'Text',
                content: '<h5>Mehngi Web</h5>'

            }, {
                id: 'h6',
                label: 'h6',
                category: 'Text',
                content: '<h6>Mehngi Web</h6>'

            },
            // Forms
            // Button
            {
                id: 'Button',
                label: 'Button',
                category: 'form',
                content: `<button class="AM-Btn">AM-Web</button>
                <style>
                .AM-Btn{
                font-family:Verdana, Geneva, sans-serif;
                font-size:15px;
                font-weight:500;
                color:#ffffff;
                width:100px;
                height:35px;
                border:2px solid #20e331;
                border-radius:5px 5px 5px 5px;
                background-color:#2a2a2a;}
               `
            },
            // Input
            {
                id: 'input',
                label: 'input',
                category: 'form',
                content: `<input type="text" placeholder="Enter Text">
                `
            },
            // form
            {
                id: 'form',
                label: 'form',
                category: 'form',
                content: `<form action="">
                <input type="text"> 
             </form>`
            },
            // textarea
            {
                id: 'textarea',
                label: 'textarea',
                category: 'form',
                content: `<textarea name="message" rows="10" cols="30">
                The cat was playing in the garden.
                </textarea>`
            },
            // tables
            {
                id: 'tables',
                label: 'Table',
                category: 'form',
                content: `<table style="width:100%">
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
              </table>
              <style>
              tr{
                height20px
                margin: 5px;
                padding:10px;
                
              }
              </style>
              `
            }



        ]

    },
    // adding panel butons here
    panels: {
        defaults: [
            // ...
            {
                id: 'panel-switcher',
                el: '.panel__switcher',
                buttons: [{
                    id: 'show-layers',
                    active: true,
                    label: '<svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>',
                    command: 'show-layers',
                    togglable: false,
                }, {
                    id: 'show-elements',
                    active: false,
                    label: '<svg width="13px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"/></svg>',
                    title: 'elements',
                    command: 'show-elements',
                    togglable: false,
                }, {
                    id: 'show-style',
                    active: false,
                    label: '<svg width="15px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/></svg>',
                    command: 'show-styles',
                    togglable: false,
                }, {
                    id: 'show-settings',
                    active: false,
                    label: '<svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/></svg>',
                    command: 'show-settings',
                    togglable: false,
                }],
            },
            {
                id: 'panel-devices',
                el: '.panel__devices',
                buttons: [{
                        id: 'device-desktop',
                        label: '<svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/></svg>',
                        command: 'set-device-desktop',
                        active: true,
                        togglable: false,
                    },
                    {
                        id: 'device-Tablet',
                        label: '<svg width="11px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 64H64V384H384V64z"/></svg>',
                        command: 'set-device-Tablet',
                        togglable: false,
                    },

                    {
                        id: 'device-mobile',
                        label: '<svg width="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/></svg>',

                        command: 'set-device-mobile',
                        togglable: false,
                    }
                ],
            }
        ]
    },
    // All manager are here
    layerManager: {
        appendTo: '.layers-container',
        open: false,

    },
    selectorManager: {
        appendTo: '.selector-container'
    },
    styleManager: {

        appendTo: '.styles-container',
        open: false,

        sectors: [
            // typography
            {
                open: false,
                name: 'Typography',
                buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']
            },
            // Positioning
            {
                open: false,
                name: 'Positioning',
                buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
                properties: [
                    // float
                    {

                        type: 'radio',
                        name: 'Float',
                        property: 'float',
                        defaults: 'none',

                    },
                    // display
                    {
                        type: 'select',
                        name: 'Display',
                        property: 'display',
                        defaults: 'block',

                    },
                    {
                        type: 'select',
                        name: 'Position',
                        property: 'position',
                        defaults: 'static',
                    },
                ]
            },
            // Dimentions
            {
                name: 'Dimension',
                open: false,

                buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],

                properties: [
                    //Width 
                    {

                        type: 'integer',
                        name: 'Width',
                        property: 'width',
                        units: ['px', '%', 'rem'],
                        defaults: 'auto',

                    },
                    // Height
                    {

                        type: 'integer',
                        name: 'Height',
                        property: 'height',
                        units: ['px', 'rem', '%'],
                        defaults: 'auto',

                    },
                    // Margin
                    {

                        type: 'composite',
                        name: 'Margin',
                        property: 'margin',
                        units: ['px', 'rem', '%'],
                        defaults: 'auto',
                        properties: [
                            { name: 'Top', property: 'margin-top' },
                            { name: 'Right', property: 'margin-right' },
                            { name: 'Bottom', property: 'margin-bottom' },
                            { name: 'Left', property: 'margin-left' },
                        ]

                    }, // Padding
                    {

                        type: 'composite',
                        name: 'Padding',
                        property: 'padding',
                        units: ['px', 'rem', '%'],
                        defaults: 'auto',
                        properties: [
                            { name: 'Top', property: 'padding-top' },
                            { name: 'Right', property: 'padding-right' },
                            { name: 'Bottom', property: 'padding-bottom' },
                            { name: 'Left', property: 'padding-left' },
                        ]

                    }
                ]
            },
            // Decoration
            {
                open: false,
                name: 'Decoration',
                buildProps: ['background-color', 'border', 'border-radius', 'box-shadow', 'background'],
                properties: [
                    // BG-color
                    {
                        name: 'BG-Color',
                        property: 'background-color',
                        type: 'color',
                        defaults: '#ffffff'
                    },
                    // Border
                    {
                        name: 'Border',
                        property: 'border',
                        properties: [
                            { type: 'integer', name: 'width', units: ['px', '%', 'rem'], property: 'border-width', defaults: '0' },
                            { name: 'style', property: 'border-style', type: 'select' },
                            { name: 'color', property: 'border-color', type: 'color', defaults: '#000000' }
                        ],
                    },

                    // Border Radius

                    {
                        name: 'Border Radius',
                        property: 'border-radius',
                        type: 'composite',
                        properties: [

                            { name: 'Top-Left', property: 'border-top-left-radius', defaults: '0' },
                            { name: 'Top-Rigth', property: 'border-top-right-radius', defaults: '0' },
                            { name: 'Bottom-Left', property: 'border-bottom-left-radius', defaults: '0' },
                            { name: 'Bottom-Right', property: 'border-bottom-right-radius', defaults: '0' },
                        ]
                    }
                ]
            },
            // Flex
            {
                name: 'Flex',
                open: false,
                properties: [{
                        name: 'Flex Container',
                        property: 'display',
                        type: 'select',
                        defaults: 'block',
                        list: [
                            { value: 'block', name: 'Disable' },
                            { value: 'flex', name: 'Enable' }
                        ],
                    },
                    {
                        name: 'Direction',
                        property: 'flex-direction',
                        type: 'select',
                        defaults: 'row',
                        list: [{
                                value: 'row',
                                name: 'Row',
                                title: 'Row',
                            },
                            {
                                value: 'row-reverse',
                                name: 'Row reverse',
                                title: 'Row reverse',
                            },
                            {
                                value: 'column',
                                name: 'Column',
                                title: 'Column',

                            },
                            {
                                value: 'column-reverse',
                                name: 'Column reverse',
                                title: 'Column reverse',
                            }
                        ],
                    },
                    {
                        name: 'Flex Parent',
                        property: 'label-parent-flex',
                        type: 'integer',
                    }, {
                        name: 'Flex Children',
                        property: 'label-parent-flex',
                        type: 'integer',
                    },

                    {
                        name: 'Justify',
                        property: 'justify-content',
                        type: 'select',
                        defaults: 'flex-start',
                        list: [{
                                value: 'flex-start',
                                title: 'Start',
                            },
                            {
                                value: 'flex-end',
                                title: 'End',
                            },
                            {
                                value: 'space-between',
                                title: 'Space between',

                            },
                            {
                                value: 'space-around',
                                title: 'Space around',
                            },
                            {
                                value: 'center',
                                title: 'Center',

                            }
                        ],
                    },
                    {
                        name: 'Align Self',
                        property: 'align-self',
                        type: 'select',
                        defaults: 'auto',
                        list: [{
                                value: 'auto',
                                name: 'Auto',
                            },
                            {
                                value: 'flex-start',
                                title: 'Start',
                            },
                            {
                                value: 'flex-end',
                                title: 'End',
                            },
                            {
                                value: 'stretch',
                                title: 'Stretch',
                            },
                            {
                                value: 'center',
                                title: 'Center',

                            }
                        ],
                    }, {
                        name: 'Align Items',
                        property: 'align-items',
                        type: 'select',
                        defaults: 'center',
                        list: [{
                                value: 'flex-start',
                                title: 'Start',
                            },
                            {
                                value: 'flex-end',
                                title: 'End',
                            },
                            {
                                value: 'stretch',
                                title: 'Stretch',
                            },
                            {
                                value: 'center',
                                title: 'Center',

                            }
                        ],
                    },

                    {
                        name: 'Order',
                        property: 'order',
                        type: 'integer',
                        defaults: 0,
                        min: 0
                    },
                    {
                        name: 'Flex',
                        property: 'flex',
                        type: 'composite',
                        properties: [{
                                name: 'Grow',
                                property: 'flex-grow',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            },
                            {
                                name: 'Shrink',
                                property: 'flex-shrink',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            },
                            {
                                name: 'Basis',
                                property: 'flex-basis',
                                type: 'integer',
                                units: ['px', '%', ''],
                                unit: '',
                                defaults: 'auto',
                            }
                        ],
                    },

                ]
            },
            {
                name: 'Extra',
                open: false,
                buildProps: ['transition', 'perspective', 'transform'],
                properties: [{
                        property: 'transition',
                        properties: [
                            { name: 'Property', property: 'transition-property' },
                            { name: 'Duration', property: 'transition-duration' },
                            { name: 'Easing', property: 'transition-timing-function' }
                        ],
                    },
                    {
                        property: 'transform',
                        properties: [
                            { name: 'Rotate X', property: 'transform-rotate-x' },
                            { name: 'Rotate Y', property: 'transform-rotate-y' },
                            { name: 'Rotate Z', property: 'transform-rotate-z' },
                            { name: 'Scale X', property: 'transform-scale-x' },
                            { name: 'Scale Y', property: 'transform-scale-y' },
                            { name: 'Scale Z', property: 'transform-scale-z' }
                        ],
                    }
                ]
            },
        ]






    },
    traitManager: {
        appendTo: '.traits-container',
        open: false,


    },
    deviceManager: {
        devices: [


            {
                id: 'desktop',
                name: 'Desktop',
                width: ''
            },
            {
                id: 'tablet',
                name: 'Tablet',
                width: '768px',
                widthMedia: '992px'
            },
            {
                id: 'mobileLandscape',
                name: 'Mobile landscape',
                width: '568px',
                widthMedia: '768px'
            },
            {
                id: 'mobilePortrait',
                name: 'Mobile portrait',
                width: '320px',
                widthMedia: '480px'
            }

        ]
    },
});
// custome trait for
//  input
editor.DomComponents.addType('input', {
    isComponent: el => el.tagName == 'INPUT',
    model: {
        defaults: {
            traits: [
                'id',
                'class',
                'title',
                'name',
                'placeholder',
                'value',
                {
                    type: 'select',
                    label: 'Type',
                    name: 'type',
                    options: [
                        { id: 'text', name: 'Text' },
                        { id: 'email', name: 'Email' },
                        { id: 'password', name: 'Password' },
                        { id: 'number', name: 'Number' },
                        { id: 'button', name: 'Button' },
                        { id: 'submit', name: 'submit' },
                        { id: 'reset', name: 'reset' },
                        { id: 'file', name: 'file' },
                        { id: 'color', name: 'color' },
                        { id: 'image', name: 'image' },
                        { id: 'radio', name: 'radio' },


                    ]
                },
                'form',

                {
                    name: 'step',
                    default: 1,

                },
                'Maxlength',
                {
                    type: 'checkbox',
                    name: 'readonly'
                },

                {
                    type: 'checkbox',
                    name: 'disabled'
                }, // {
                //     type: 'checkbox',
                //     name: ''
                // },

                {
                    type: 'checkbox',
                    name: 'required',
                }
            ],

            attributes: { type: 'text', required: true },
        },
    },
});
// Forms
editor.DomComponents.addType('form', {
    isComponent: el => el.tagName == 'FORM',
    model: {
        defaults: {
            traits: [{
                    name: 'action',
                    placeholder: 'add action'
                },
                {
                    name: 'target',
                    type: 'select',
                    options: [
                        { id: '_blank' },
                        { id: '_self', label: 'self' },
                        { id: '_parent', label: 'parent' },
                        { id: '_top', label: 'top' },
                    ]
                },
                {
                    name: 'method',
                    type: 'select',
                    options: [
                        { id: 'get', label: 'Get' },
                        { id: 'post', label: 'Post' }
                    ]

                }

            ]
        }
    }
});

// Buttons
editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
});
// code commands
editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [

        {
            id: 'visibility',
            active: false, // active by default
            className: 'btn-toggle-borders',
            label: '<svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-336c0-8.8 7.2-16 16-16l336 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32C35.8 32 0 67.8 0 112L0 448zm160 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm0-128c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>',
            command: 'sw-visibility', // Built-in command
        }, {
            id: 'export',
            className: 'btn-open-export',
            label: '<svg width="17px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>',
            command: 'export-template',
            context: 'export-template', // For grouping context of buttons from the same panel
        }, {
            id: 'show-json',
            className: 'btn-show-json',
            label: 'JSON',
            context: 'show-json',
            command(editor) {
                editor.Modal.setTitle('Components JSON')
                    .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
                    .open();
            },
        }
    ],
});
// Layer Command
editor.Commands.add('show-layers', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getLayersEl(row) { return row.querySelector('.layers-container') },

    run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
    },
    stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
    },
});
// Styles Command
editor.Commands.add('show-styles', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getStyleEl(row) { return row.querySelector('.styles-container') },

    run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
    },
    stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
    },
});
// Desktop version
editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
});
// Tablet
editor.Commands.add('set-device-Tablet', {
    run: editor => editor.setDevice('Tablet')
});
// mobile landscape
editor.Commands.add('set-device-mobile-L', {
    run: editor => editor.setDevice('Mobile landscape')
});
// Mobile Version
editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile portrait')
});
// Elements
editor.Commands.add('show-elements', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getLayersEl(row) { return row.querySelector('.block-selector') },

    run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
    },
    stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
    },
});
// settings
editor.Commands.add('show-settings', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getLayersEl(row) { return row.querySelector('.traits-container') },

    run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
    },
    stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
    },
});
// section category closer in block manager
// setTimeout(() => {
//     const categories = editor.BlockManager.getCategories();
//     console.log(categories);
//     categories.each(category => category.set("open", false));
// }, 1000)