import React from 'react'

const activeToken = 'px-2'
const inactiveToken = 'px-2 opacity-40 hover:opacity-75 cursor-pointer'

const SelectToken = ({ state, setState, field = 'priceUSDQ' }) => {
  return (
    <>
      <div
        className="grid grid-cols-4 text-center gap-1 sm:gap-3 text-sm font-medium z-10"
        style={{ marginBottom: -1 }}
      >
        {tokens.map((token) => {
          return (
            <div
              key={token.id}
              className={state.token === token.id ? activeToken : inactiveToken}
              onClick={() => setState({ token: token.id })}
              children={<token.icon />}
            />
          )
        })}
        {tokens.map((token) => (
          <div
            key={token.id}
            className={
              state.token === token.id
                ? 'border-white border-b pb-4'
                : 'opacity-40'
            }
          >
            {token.id}
          </div>
        ))}
      </div>
      <div className="border-b border-gray-600 mx-3 sm:mx-12 self-stretch z-0" />
      <div className="mt-4 sm:mt-8 text-xl sm:text-5xl font-semibold">
        {state[field]} {state.token}
      </div>
    </>
  )
}

const EthIcon = () => (
  <svg className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 62 62">
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <circle cx="30" cy="30" r="30" fill="#222" stroke="#F545FF" />
      <path
        fill="#F545FF"
        d="M29.77 11.538L19.384 28.796l10.384 6.065 10.385-6.065-10.385-17.258zm0 25.998l-10.385-6.062 10.384 14.512 10.385-14.512-10.385 6.062z"
      />
    </g>
  </svg>
)

const DaiIcon = () => (
  <svg className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 62 62">
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx="30" cy="30" r="30" fill="#222" stroke="#FEC100" />
      <path
        fill="#FEC100"
        fillRule="nonzero"
        d="M30.141 13.385L13.846 29.617 30.103 45.85l16.256-16.233-16.218-16.232zm3.544 15.194l-3.544-3.54-3.197 3.54h-7.435L30.14 16.73 41.12 28.58h-7.435z"
      />
    </g>
  </svg>
)

const OgnIcon = () => (
  <svg className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 62 62">
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx="30" cy="30" r="30" fill="#222" stroke="#1A82FF" />
      <path
        fill="#1A82FF"
        d="M37.263 26.913c.187.93.283 1.95.283 3.052 0 5.933-2.782 9.475-7.444 9.475-1.944 0-3.584-.623-4.821-1.81l16.227-16.248c-.435-.77-.93-1.492-1.489-2.15-.234-.277-.48-.536-.732-.787-.032-.035-.067-.066-.1-.098-.075-.074-.147-.15-.223-.221l-.004.004c-2.356-2.2-5.386-3.36-8.858-3.36-4.012 0-7.434 1.542-9.896 4.462-2.316 2.746-3.59 6.558-3.59 10.733 0 2.775.565 5.386 1.622 7.633l4.709-4.714c-.164-.894-.247-1.867-.247-2.919 0-2.73.555-4.938 1.65-6.562 1.283-1.905 3.273-2.912 5.752-2.912 1.93 0 3.538.61 4.76 1.743L18.667 38.45c.445.809.959 1.562 1.538 2.249.116.137.236.268.356.4l.003.003c.139.152.28.298.425.442l.055.054c.046.045.09.094.136.138l.006-.005c2.357 2.246 5.41 3.43 8.915 3.43 4.015 0 7.444-1.543 9.917-4.462 2.329-2.75 3.612-6.562 3.612-10.734 0-2.817-.587-5.469-1.684-7.741l-4.684 4.69z"
      />
    </g>
  </svg>
)

const OusdIcon = () => (
  <svg className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 62 62">
    <defs>
      <linearGradient
        id="hj4kwlbiha"
        x1="50.898%"
        x2="41.036%"
        y1="79.568%"
        y2="-11.87%"
      >
        <stop offset=".058%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#1E313F" />
      </linearGradient>
      <linearGradient
        id="z033sbd0kb"
        x1="48.094%"
        x2="58.005%"
        y1="17.958%"
        y2="112.287%"
      >
        <stop offset=".058%" stopColor="#FFF" />
        <stop offset="99.67%" stopColor="#4E5A64" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <circle cx="30" cy="30" r="30" fill="#222" stroke="#FFF" />
      <g fillRule="nonzero">
        <path
          fill="#FAFBFC"
          d="M14.627 14.253c-.264-.044-.506-.11-.747-.153-3.25-.66-5.6-1.12-5.6-3.383 0-1.405 1.383-2.525 3.865-2.525 2.218 0 3.975.9 5.117 2.591l.176.044 3.536-3.624-.022-.131c-1.406-1.67-3.185-2.833-5.227-3.448-.286-.088-.55-.154-.835-.22h-.022c-.11-.022-.197-.044-.307-.066V.132H9.729v3.206c-.154.022-.307.066-.461.088h-.022c-2.284.55-4.283 1.735-5.842 3.558-.659 1.098-.988 2.416-.988 3.931 0 5.183 3.909 6.83 7.73 7.753.703.175 1.406.307 2.087.417 2.394.44 4.458.812 4.458 2.965 0 1.34-1.471 3.008-4.546 3.008-1.823 0-3.316-.614-4.414-1.735-.066-.065-.154-.131-.22-.197l-4.173 2.899v.154c.593.702 1.252 1.317 1.955 1.844.241.176.483.33.725.483h.022c.241.154.505.286.746.418 0 0 .022 0 .022.022.264.131.505.241.769.351.022 0 .022 0 .044.022.263.11.527.198.79.286.022 0 .044 0 .044.022.132.043.242.065.374.11h.044c.131.043.263.065.417.11.022 0 .044 0 .066.021.11.022.241.044.351.066v3.206h4.832v-3.206c.088-.022.175-.022.263-.044h.044c.33-.066.66-.154.988-.263.154-.044.33-.11.484-.154 1.779-.66 3.338-1.757 4.612-3.25.483-.572.9-1.165 1.273-1.823.198-.703.286-1.494.286-2.328.022-5.579-4.195-7.094-7.862-7.819z"
          transform="translate(18 13.385)"
        />
        <path
          fill="url(#hj4kwlbiha)"
          d="M3.36 26.157c-.241-.286-.461-.571-.659-.879-.088-.132-.175-.263-.263-.373-.022-.022-.044-.066-.066-.088-.066-.11-.154-.242-.22-.373l-.066-.132c-.066-.11-.131-.242-.197-.352l-.066-.131c-.066-.11-.132-.242-.176-.374-.022-.044-.044-.11-.066-.153-.066-.132-.11-.242-.175-.374-.022-.044-.044-.088-.066-.154-.044-.131-.11-.263-.154-.395 0-.022-.022-.066-.022-.088-.11-.307-.22-.615-.307-.922 0-.022-.022-.044-.022-.088-.022-.11-.066-.22-.088-.33l-.066-.263c-.022-.11-.044-.198-.066-.307-.022-.088-.044-.198-.066-.286-.022-.11-.044-.198-.066-.307l-.066-.33c-.022-.088-.022-.197-.044-.285-.022-.11-.044-.22-.044-.352-.022-.088-.022-.175-.043-.285-.022-.132-.022-.242-.044-.374 0-.087-.022-.175-.022-.263 0-.154-.022-.286-.022-.44 0-.065 0-.131-.022-.219 0-.22-.022-.44-.022-.659 0-.22 0-.417.022-.637v-.197c0-.154.022-.286.022-.44 0-.065.022-.153.022-.22.022-.131.022-.285.044-.416 0-.066.022-.132.022-.198.021-.176.043-.33.065-.483 0-.044 0-.088.022-.11.022-.198.066-.395.11-.593.022-.066.022-.132.044-.176.022-.132.066-.263.088-.395.022-.066.044-.154.044-.22.022-.131.066-.241.088-.373.022-.066.044-.154.066-.22.044-.131.087-.263.11-.395.021-.066.043-.11.065-.176l.198-.527c.022-.066.044-.11.066-.175.044-.132.088-.242.154-.374.022-.066.065-.132.087-.22.044-.11.088-.197.154-.307.044-.066.066-.154.11-.22.044-.11.11-.197.154-.307.044-.066.066-.132.11-.198l.263-.46c-.198.724-.285 1.515-.285 2.35 0 2.854 1.207 5.028 3.601 6.5.132 2.57.879 4.59 2.153 5.886L3.36 26.157z"
          transform="translate(18 13.385)"
        />
        <path
          fill="url(#z033sbd0kb)"
          d="M17.284 10.783c.747 1.12 1.23 2.526 1.406 4.217.614.285 1.142.615 1.625.988 1.779 1.384 2.68 3.404 2.68 5.974 0 .307-.023.615-.045.922v-.022c.088-.197.176-.417.242-.637.022-.065.044-.11.066-.175.044-.154.11-.308.153-.462.022-.065.044-.153.066-.22.022-.087.066-.197.088-.285.044-.131.066-.241.11-.373.022-.088.044-.198.066-.285l.066-.33c.022-.066.022-.154.044-.22.022-.153.065-.329.087-.483 0-.066.022-.131.022-.197l.066-.527c0-.044 0-.066.022-.11.022-.176.044-.33.044-.505 0-.044 0-.088.022-.132.022-.198.022-.395.044-.593v-.132c0-.198.022-.417.022-.615 0-.22 0-.439-.022-.68 0-.067 0-.132-.022-.22 0-.154-.022-.308-.022-.44 0-.087-.022-.175-.022-.263-.022-.132-.022-.264-.044-.395 0-.088-.022-.176-.044-.286-.022-.132-.022-.241-.044-.373-.022-.088-.022-.198-.044-.286-.022-.11-.043-.241-.065-.351-.022-.088-.044-.198-.066-.286l-.066-.329c-.022-.088-.044-.198-.066-.286-.022-.11-.066-.22-.088-.329-.022-.088-.044-.198-.088-.285-.022-.11-.066-.198-.088-.308-.022-.088-.066-.198-.087-.285-.044-.11-.066-.198-.11-.286-.044-.088-.066-.198-.11-.285-.044-.088-.066-.198-.11-.286-.044-.088-.088-.198-.11-.285l-.131-.264c-.044-.088-.088-.176-.132-.285l-.132-.264c-.044-.088-.088-.176-.154-.264-.044-.087-.088-.175-.153-.241-.044-.088-.11-.176-.154-.264-.044-.088-.11-.153-.154-.241-.154-.242-.33-.483-.505-.725-.132-.176-.264-.33-.395-.483l-3.668 3.777z"
          transform="translate(18 13.385)"
        />
      </g>
    </g>
  </svg>
)

const tokens = [
  { id: 'ETH', icon: EthIcon },
  { id: 'DAI', icon: DaiIcon },
  { id: 'OUSD', icon: OusdIcon },
  { id: 'OGN', icon: OgnIcon }
]

export default SelectToken
