import { Args, Command, Flags } from "@oh-my-pi/pi-utils/cli";
import { specHelp as commandHelp } from "../cli/command-help";
import { createSpecFile } from "../specs";

export default class Spec extends Command {
	static description = commandHelp.description;
	static args = {
		action: Args.string({ description: "new", required: true, options: ["new"] }),
		slug: Args.string({ description: "lowercase spec filename", required: true }),
	};
	static flags = {
		title: Flags.string({ description: "Human-readable specification title" }),
	};
	static examples = [
		"omp spec new managed-memory",
		'omp spec new managed-memory --title "Managed memory integration"',
	];

	async run(): Promise<void> {
		const { args, flags } = await this.parse(Spec);
		const slug = args.slug;
		if (slug === undefined) {
			throw new Error("A specification slug is required");
		}
		const filePath = await createSpecFile(process.cwd(), slug, flags.title);
		process.stdout.write(`Created ${filePath}\n`);
	}
}
