<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">{{ $t('CHANGELOG.HEADLINE_TITLE') }}</h2>
                <p class="desc pl-4">{{ $t('CHANGELOG.HEADLINE_SUB') }}</p>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.1.2</h2>
                <p class="text-muted">EA update 572</p>
                <div class="pl-4">
                    <p class="text-primary h5">✨ Updates</p>
                    <ul>
                        <li>Plasma Thruster base propellant consumption reduced from 290 to 248</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.1.1</h2>
                <p class="text-muted">Translation Update</p>
                <div class="pl-4">
                    <p class="text-primary h5">✨ Updates</p>
                    <ul>
                        <li>
                            Updated French translation (Thanks to
                            <a href="https://github.com/kikilefada" target="_blank" rel="noopener">kikilefada</a> from
                            <a href="https://starbasefrance.fr" target="_blank" rel="noopener">starbasefrance.fr</a>)
                        </li>
                        <li>
                            Updated Chinese translation (Thanks to
                            <a href="https://github.com/meglinge" target="_blank" rel="noopener">meglinge</a>)
                        </li>
                        <li>
                            Updated Portuguese Brazil translaion (Thanks to
                            <a href="https://github.com/yLordMagnus" target="_blank" rel="noopener">Magnânimo</a> -
                            Discord: ᵈᵉᵛMagnus#0001 )
                        </li>
                        <li>
                            Updated Russian translation (Thanks to
                            <a href="https://github.com/vabka" target="_blank" rel="noopener">vabka</a> from
                            <a href="https://discord.gg/ngCnEQ4QDs" target="_blank" rel="noopener">[North Order].fr</a>)
                        </li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>
                            Added Chinese (Traditional) translation (Thanks to
                            <a href="https://github.com/meglinge" target="_blank" rel="noopener">meglinge</a>)
                        </li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.1.0</h2>
                <p class="text-muted">Major Framework Update</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed several missing styles caused by Bootstrap update</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Improved page loading times</li>
                        <li>Improved Localization files for every page (alot needs to be translated again)</li>
                        <li>
                            Changed Website Title from "Starbase Tools" to "Startbase Codes" to match the domain name
                        </li>
                        <li>Improved SEO for Website Title changes (Starbase Codes)</li>
                    </ul>
                    <p class="text-primary h5">✨ Updates</p>
                    <ul>
                        <li>Added placeholder page for the Capital-Ship Calculator</li>
                        <br />
                        <li>Updated Nuxt to v2.15.8</li>
                        <li>Updated Nuxt-i18n to 6.28.1</li>
                        <li>Updated Bootstrap to 4.5.3</li>
                        <li>Updated Bootstrap-Vue to 2.21.2</li>
                        <li>Updated json-url to 3.0.0</li>
                        <li>Updated Vue-Sweetalert2 to 5.0.2</li>
                        <br />
                        <li>Changed sass to node-sass do to bootstrap update deploy conflicts</li>
                        <br />
                        <li>Removed Nuxt-start as its not used anymore</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.8</h2>
                <p class="text-muted">French Translation and small fixes</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed a wrong calculation in Heat and Cooling (Thanks to Regithros#9050)</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>
                            Added French localization (Thanks to
                            <a href="https://github.com/kikilefada" target="_blank" rel="noopener">kikilefada</a> from
                            <a href="https://starbasefrance.fr" target="_blank" rel="noopener">starbasefrance.fr</a>)
                        </li>
                        <li>
                            Added Chinese localization (Thanks to
                            <a href="https://github.com/meglinge" target="_blank" rel="noopener">meglinge</a>)
                        </li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.7</h2>
                <p class="text-muted">Ship-Calculator Update</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>
                            Fixed several misspellings yet again... please... for the love of god... how bad can it be
                        </li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Added Tooltip for how to get your ship mass</li>
                        <li>
                            Added Portuguese Brazil localization (Thanks to
                            <a href="https://github.com/yLordMagnus" target="_blank" rel="noopener">Magnânimo</a> -
                            Discord: ᵈᵉᵛMagnus#0001 )
                        </li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.6</h2>
                <p class="text-muted">Ship-Calculator Update</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed several misspellings again... yea im really bad at that, lul</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Added Weapons</li>
                        <li>Added Battery Support for Mining Laser</li>
                        <li>Added more Energy Drain calctulation (Thruster / idle / tools / weapons)</li>
                        <li>
                            Changed Flight Time and Length Calculations (now shows the overall max time/length, not only
                            Propellant)
                        </li>
                        <li>Moved raw Thrust Values to a collapsed Menu with button</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.5</h2>
                <p class="text-muted">Ship-Calculator Russian Translation</p>
                <div class="pl-4">
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>
                            Added Russian localization (Thanks to
                            <a class="" href="https://discord.gg/ngCnEQ4QDs" target="_blank" rel="noopener">
                                vabka from [North Order]</a
                            >)
                        </li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.4</h2>
                <p class="text-muted">Ship-Calculator Improvements</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed several misspellings... yea im bad at that</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Added Localization Github Repo to Start page (Github Button)</li>
                        <li>
                            Added a bunch more Tooltips for Informations on certin Calculations (blue exclamation mark)
                        </li>
                        <li>
                            Added Red/Blue Colord Values if some calculation like Energy Generation/Drain when
                            lower/higher
                        </li>
                        <li>Re-Aranged Cards for better visibility</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Reset Funtion for Ship-Calculator</li>
                        <li>Added Cooling</li>
                        <li>Added Tools</li>
                        <li>Added Energy Generation / Drain</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.3</h2>
                <p class="text-muted">Ship-Calculator Save / Load function</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed a wrong number in Speed Calculation</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Changed url to the Ship-Calculator</li>
                        <li>More accurate Ship-Speed Calculations</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added Save and Load function for Ship-Calculator</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.2</h2>
                <p class="text-muted">Minor Fixed and Improvements</p>
                <div class="pl-4">
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed some de-DE translation stuff (still alot more todo)</li>
                        <li>Fixed Discord invite Links</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>Added Plamsa Thruster Body and Ring to Forward Thrusters</li>
                        <li>Added Thruster Efficiency Value</li>
                    </ul>
                </div>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 0.0.1</h2>
                <p class="text-muted">Initial Alpha Release</p>
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
