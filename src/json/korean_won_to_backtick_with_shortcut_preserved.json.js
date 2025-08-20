// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Korean Won (₩) to Backtick (`) with shortcut preserved',
        maintainers: [
          "sts07142"
        ],
        rules: [
          {
            "description": "(₩) -> (`) 으로 변환하며, (`) 을 포함한 단축키 사용에 영향을 주지 않습니다.",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "input_sources": [{ "language": "ko" }],
                            "type": "input_source_if"
                        }
                    ],
                    "from": {
                        "key_code": "grave_accent_and_tilde",
                        "modifiers": { "optional": [] }
                    },
                    "to": [
                        {
                            "key_code": "grave_accent_and_tilde",
                            "modifiers": ["option"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        ],
      },
      null,
      '  '
    )
  )
}

main()
