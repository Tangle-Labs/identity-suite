<style lang="scss">
	.button {
		background-color: var(--primary);
		padding: 10px 30px;
		color: var(--primary-alt);
		border: 0;
		transition: all 0.5s;
		border-radius: 30px;
		font-size: 1rem;
		font-weight: 600;
		outline: none;
		width: 100%;

		&:hover {
			cursor: pointer;
			background-color: var(--primary-hover);
		}
	}

	.alternative {
		background-color: var(--secondary);
		color: var(--secondary-alt);

		&:hover {
			background-color: var(--secondary-hover);
		}
	}

	.tertiary {
		background-color: var(--body-bg);
		color: var(--label-text);
		&:hover {
			background-color: var(--alt-background);
			color: var(--body-alt);
		}
	}

	.small {
		font-size: 0.8rem;
		padding: 8px 24px;
	}

	.circular {
		padding: 4px;
		box-sizing: border-box;
		font-size: 0.8rem;
		width: 25px;
		height: 25px;
		border-radius: 20px;
		text-transform: uppercase;
	}

	.disabled {
		background: var(--alt-background);

		&:hover {
			cursor: default;
			background: var(--alt-background);
		}
	}

	.large {
		font-size: 1.2rem;
		padding: 12px 36px;
	}
</style>

<script lang="ts">
	export let variant: "primary" | "secondary" | "tertiary" = "primary";
	export let label: string;
	export let onClick: (...args: any[]) => void;
	export let size: "large" | "medium" | "small" | "circular" = "medium";
	export let isDisabled = false;
</script>

<button
	disabled={isDisabled}
	class="button"
	class:alternative={variant === "secondary"}
	class:tertiary={variant === "tertiary"}
	class:large={size === "large"}
	class:small={size === "small"}
	class:circular={size === "circular"}
	class:disabled={isDisabled}
	on:click={onClick}>{label}</button
>
