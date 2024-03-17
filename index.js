import antfu from '@antfu/eslint-config'

export default function config(options) {
  return antfu({
    rules: {
      'no-console': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
      'vue/custom-event-name-casing': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'curly': ['error', 'all'],
      'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
      ...(options?.rules || {}),
    },
    ...(options || {})
  })
}
