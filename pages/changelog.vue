<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">Changelog</h2>
                <p class="desc pl-4">well... yea thats what you would expext here</p>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 1.2.3</h2>
                <p class="text-muted">
                    Item Database Test
                </p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>
                            Fixed some fr-FR translation stuff - Thanks to Dead Matter Francophone (
                            <a href="https://discord.gg/RX64hjf" target="_blank" rel="noopener noreferrer">
                                French DM Community Discord
                            </a>
                            )
                        </li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Added missing translations in Character Builder</li>
                        <li>Changed Discord link on Start page to JLN Development Discord</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Database Test Page (WIP)</li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.2.2</h2>
                <p class="text-muted">
                    New Domain, New Translations, Preperation for Items Database
                </p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed bunch of small typos in en-US translations</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>
                            New Domain ( <a href="https://deadmatter.tools">deadmatter.tools</a> ), old one will
                            redirect to the new domain
                        </li>
                        <li>
                            Added French Translation - Thanks to Dead Matter Francophone (
                            <a href="https://discord.gg/RX64hjf" target="_blank" rel="noopener noreferrer">
                                French DM Community Discord
                            </a>
                            )
                        </li>
                        <li>Added Chinese Translation - Thanks to HawxGT#7708</li>
                        <li>Updated Turkish Translation - Thanks to OFLU#0390</li>
                        <li>Added new localization Github Repository button to the Start page</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added bunch of backend stuff in preperation for the items Database</li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.2.1</h2>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed Navbar Brand link to redirect with active locale</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Added Turkish localization (wip)</li>
                        <li>Changed Build Config to extract CSS Chunks (client will only load in what it needs)</li>
                        <li>Did a bunch of SEO improvements</li>
                        <li>Alert on Character-Builder will dismiss itself after short amount of time</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Map Page</li>
                        <li>Added Database/Items Page</li>
                        <li>Added Database/Weapons Page</li>
                        <li>Added Database/Vehicles Page</li>
                        <li>Added Database/Factions Page</li>
                        <li>Added Database/Creatures Page</li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.2.0</h2>
                <div class="pl-4">
                    <p class="text-muted">
                        Major update with Localization features and several Improvements, as well as some bug fixes
                    </p>
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed Initial Perk Point Value (should be 0 instead of 10)</li>
                        <li>Fixed Initial Perk Point Calculation when open the Builder for the first time</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Corrected various misspellings</li>
                        <li>Added a Reset Button to the Character-Builder</li>
                        <li>Changed how query gets pushed to route directly (for easier language change)</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Changelog Page</li>
                        <li>Added Localization functionality</li>
                        <ul>
                            <li>
                                If you would like to Translate this Website to a another Language, please contact me!
                            </li>
                            <li>Current Translations: en-US, de-DE</li>
                        </ul>
                        <li>Added Option Menu (top right icon in Navigation)</li>
                        <li>Added Cookieless Tracking - Just-Analytics</li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.0.2</h2>
                <div class="pl-4">
                    <p class="text-muted">Several Bug fixes and Improvements</p>
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed an issue where on mobile u still got tooltipps in your way</li>
                        <li>Fixed server-side rendering out of sync with client-side</li>
                        <li>Fixed loading of favicon correctly</li>
                        <li>Fixed setting active Occupation / Peak</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>
                            Improved length of Saved Build URL
                            <ul>
                                <li class="small text-muted">unfortunately old saved url´s no longer work :(</li>
                            </ul>
                        </li>
                        <li>
                            Build url will now be generated each time you select something and set it as your browser
                            url
                            <ul>
                                <li class="small text-muted">
                                    no longer need to click on "Save Build", just copy your url from the browser
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.0.1</h2>
                <div class="pl-4">
                    <p class="text-muted">Updated Character Builder design and functions</p>
                    <p class="text-primary h5">🎨 Design Changes</p>
                    <ul>
                        <li>Changed Theme Colors</li>
                        <li>Added slight Shadows to Cards</li>
                        <li>Added Icons all over the place</li>
                        <li>Added Mobile friendly stuff</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added save Build function</li>
                        <li>Added loading saved build function</li>
                        <li>Added Perk Stats Calculation</li>
                        <li>Added Perk Stats Listing</li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.0.0</h2>
                <div class="pl-4">
                    <p class="text-muted">Initial Release</p>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
    margin-top: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    .title {
        text-decoration: underline;
    }
}
</style>
