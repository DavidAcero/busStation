// import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// const Groq = require("groq-sdk");
// const groq = new Groq({
//   apiKey: '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'
//   // apiKey: process.env.GROQ_API_KEY
// });

// // turn on headless mode when running with HEADLESS=true environment variable
// // export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// // enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
// setCommonPlugins();

// export const config: CodeceptJS.MainConfig = {
//   tests: 'codecept/**/*.spec.ts',
//   output: './output',
//   helpers: {
//     Playwright: {
//       browser: 'chromium',
//       url: 'https://davidacero.github.io/busStation/',
//       show: true
//     },
//   },

//   ai: {
//     request: async (messages) => {
//       const chatCompletion = await groq.chat.completions.create({
//           messages,
//           model: "mixtral-8x7b-32768"    // mixtral-8x7b-32768  llama2-70b-4096 || gemma-7b-it || llama3-70b-8192 || mixtral-8x7b-32768
//       });
//       return chatCompletion.choices[0]?.message?.content || "";
//     }
//   },

//   include: {
//     I: './steps_file'
//   },
//   name: 'busStation'
// }