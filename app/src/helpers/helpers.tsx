interface IHelpers {
    typeEmoji: (type: string) => string;
}

const helpers: IHelpers = {
    typeEmoji(type: string): string {
        const pokemonType: string = type.toLocaleLowerCase()
        let emoji: string = ''

        if (pokemonType === 'steel') {
            emoji = `🛠️ ${type}`
        } else if (pokemonType === 'fire') {
            emoji = `🔥 ${type}`
        } else if (pokemonType === 'water') {
            emoji = `💧 ${type}`
        } else if (pokemonType === 'grass') {
            emoji = `🌿 ${type}`
        } else if (pokemonType === 'ice') {
            emoji = `❄️ ${type}`
        } else if (pokemonType === 'flying') {
            emoji = `🦅 ${type}`
        } else if (pokemonType === 'poison') {
            emoji = `☠️ ${type}`
        } else if (pokemonType === 'ground') {
            emoji = `🧱 ${type}`
        } else if (pokemonType === 'rock') {
            emoji = `⚔️ ${type}`
        } else if (pokemonType === 'bug') {
            emoji = `🐛 ${type}`
        } else if (pokemonType === 'dark') {
            emoji = `🌙 ${type}`
        } else if (pokemonType === 'dragon') {
            emoji = `🐉 ${type}`
        } else if (pokemonType === 'electric') {
            emoji = `⚡️ ${type}`
        } else if (pokemonType === 'fairy') {
            emoji = `🧚‍♀️ ${type}`
        } else if (pokemonType === 'fighting') {
            emoji = `🥊 ${type}`
        } else if (pokemonType === 'ghost') {
            emoji = `👻 ${type}`
        } else {
            emoji = ''
        }

        return emoji
    }
}

export { helpers }