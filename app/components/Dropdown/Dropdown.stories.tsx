/* eslint-disable react-dom/no-missing-button-type */

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

type T = typeof Dropdown.Root;

const meta: Meta = {
	component: Dropdown.Root,
	tags: ["autodocs"],
	title: "Dropdown",
} satisfies Meta<T>;

type Story = StoryObj<T>;

function DefaultDropdown() {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger>
				<button>ボタンボタンボタンボタン</button>
			</Dropdown.Trigger>
			<Dropdown.Content>
				<ul>
					<li>
						<button onClick={action("onClick")}>
							ボタン1ボタン1ボタン1ボタン1
						</button>
					</li>
					<li>
						<button onClick={action("onClick")}>ボタン2ボタン2ボタン2</button>
					</li>
					<li>
						<button onClick={action("onC2lick")}>ボタン3ボタン3</button>
					</li>
				</ul>
			</Dropdown.Content>
		</Dropdown.Root>
	);
}

export const Default: Story = {
	render: () => <DefaultDropdown />,
};

function NestingDropdown() {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger>
				<button>入れ子にできる Dropdown</button>
			</Dropdown.Trigger>
			<Dropdown.Content controllable>
				<Dropdown.ScrollArea>
					<div>
						<Dropdown.Root>
							<Dropdown.Trigger>
								<button>さらに入れ子にできる Dropdown</button>
							</Dropdown.Trigger>
							<Dropdown.Content controllable>
								<Dropdown.ScrollArea>
									<div>
										<Dropdown.Root>
											<Dropdown.Trigger>
												<button>いくらでも入れ子にできる Dropdown</button>
											</Dropdown.Trigger>
											<Dropdown.Content>
												<ul>
													<li>
														<button onClick={action("onClick")}>
															ボタン1ボタン1ボタン1ボタン1
														</button>
													</li>
													<li>
														<button onClick={action("onClick")}>
															ボタン2ボタン2ボタン2
														</button>
													</li>
													<li>
														<button onClick={action("onC2lick")}>
															ボタン3ボタン3
														</button>
													</li>
												</ul>
											</Dropdown.Content>
										</Dropdown.Root>
									</div>
								</Dropdown.ScrollArea>
							</Dropdown.Content>
						</Dropdown.Root>
					</div>
				</Dropdown.ScrollArea>
			</Dropdown.Content>
		</Dropdown.Root>
	);
}

export const Nesting: Story = {
	render: () => <NestingDropdown />,
};

export default meta;
