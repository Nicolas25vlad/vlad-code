import { type ReactNode, useId } from "react";

/** The Vlad Code V mark, filled with its cyan-to-pink brand gradient. */
export function OmpMark({ size = 22 }: { size?: number }): ReactNode {
	const gradient = `vlad-mark-${useId().replace(/:/g, "")}`;
	return (
		<svg className="sh-mark" viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
			<defs>
				<linearGradient id={gradient} x1="0" y1="1" x2="1" y2="0">
					<stop offset="0" style={{ stopColor: "var(--mark-a)" }} />
					<stop offset=".52" style={{ stopColor: "var(--mark-b)" }} />
					<stop offset="1" style={{ stopColor: "var(--mark-c)" }} />
				</linearGradient>
			</defs>
			<path
				fill={`url(#${gradient})`}
				d="M7 14 13 7h10l9 17 9-17h10l6 7-15 34-8 9H25l-8-9L4 20zm10 0 14 27 5-8-10-19zm19 28 5 7 12-28-5-7z"
			/>
		</svg>
	);
}
