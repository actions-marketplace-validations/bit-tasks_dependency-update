export type ExecFunction = (command: string, options?: {cwd: string}) => Promise<number>;

const run: (exec: ExecFunction, wsdir: string) => Promise<void> = async (exec, wsdir) => {
  const org = process.env.ORG;
  const scope = process.env.SCOPE;

  // try {
  //   await exec(`bit lane remove ${org}.${scope}/${lane} --remote --silent`, { cwd: wsdir });
  // } catch (error) {
  //   console.error(`Error while removing bit lane: ${error}. Lane may not exist`);
  // }

  await exec('bit update', { cwd: wsdir });
  //await exec(`bit lane create ${lane}`, { cwd: wsdir });
  await exec('bit snap -m "CI"', { cwd: wsdir });
  await exec('bit export', { cwd: wsdir });
}

export default run;
