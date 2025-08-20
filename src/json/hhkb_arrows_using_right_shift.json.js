function main() {
  console.log(
    JSON.stringify({
      title: 'HHKB arrows using Right Shift',
      rules: [
        {
          description: 'Implementation of arrow key like HHKB arrow using right shift option',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 'semicolon',
                modifiers: {
                  mandatory: ['right_shift'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'left_arrow',
                },
              ],
            },
            {
              type: 'basic',
              from: {
                key_code: 'slash',
                modifiers: {
                  mandatory: ['right_shift'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'down_arrow',
                },
              ],
            },
            {
              type: 'basic',
              from: {
                key_code: 'open_bracket',
                modifiers: {
                  mandatory: ['right_shift'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'up_arrow',
                },
              ],
            },
            {
              type: 'basic',
              from: {
                key_code: 'quote',
                modifiers: {
                  mandatory: ['right_shift'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'right_arrow',
                },
              ],
            },
          ],
        },
      ],
    })
  )
}

main()
