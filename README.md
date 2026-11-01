# Revit Geometry Lab

A browser-based geometry companion for Revit family authors. Select two known values, enter their dimensions, then inspect the diagram and copy expressions into your family parameters.

This package is ready for GitHub Pages. It uses plain HTML, CSS, JavaScript, and SVG, with no installation, build process, API keys, backend, or paid services. Open **guide.html** for the complete setup, technical explanation, examples, and troubleshooting guide.

## Publish on GitHub Pages

1. Extract this ZIP to your computer. Create a GitHub repository named `revit-geometry-lab` (or use another name). A public repository supports Pages on GitHub Free.
2. Upload the **contents** of the extracted `revit-geometry-lab` folder to the root of the repository. `index.html` must sit at the top level, not inside an extra folder. Include `.nojekyll`; if your upload method omits it, create an empty file with that name using GitHub's Add file menu.
3. Commit the files to `main`.
4. Go to **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: main**, and **Folder: /(root)**. Click **Save**.
5. Check the repository's Actions tab for the Pages deployment result. Open the site address shown in Settings → Pages after deployment succeeds.
6. For a repository named `revit-geometry-lab` under `jeffthomasiii`, the expected address is `https://jeffthomasiii.github.io/revit-geometry-lab/`. This is an example of the resulting URL, not a deployed site created by this package.

Keep all asset links relative, as supplied. This lets the site work under a repository subpath without edits. Standard GitHub Pages hosting is public; the owner-private access on the original prototype does not transfer with these files.

Official instructions: [Configure a GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Quick start

1. Choose **Right triangle** or **Circle & arc**.
2. Select the two values you already know and choose a length unit.
3. Enter positive numbers. Angular inputs use degrees.
4. Review the calculated dimensions and expressions. Expand **Use your parameter names** if you want the copied expressions to reference your own family names.
5. In Revit, create compatible Length, Angle, or Area parameters. Leave the known inputs editable and apply formulas to calculated parameters.
6. Click **Copy** beside the desired result and paste into Revit's Formula field. Only the expression is copied, without a target name or equals sign.

Some formulas depend on other calculated parameters. Create the full set of parameters and use the displayed relationships together. For instance, `B = 90° - A` needs an Angle parameter named `A` and its formula or input value.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Calculator page, navigation, and external reference links |
| `styles.css` | Shared colors, layout, typography, and mobile rules |
| `app.js` | Interface state, validation, parameter substitution, diagrams, and copying |
| `geometry.js` | Pure numerical solver and Revit expression templates |
| `guide.html` | Complete help page; linked from the calculator |
| `README.md` | Repository overview and publishing instructions |
| `.nojekyll` | Disables Jekyll processing for this static package |
| `tests/geometry.test.cjs` | Dependency-free mathematical regression tests |

## Local preview and checks

Open `index.html` to inspect the app, or serve the folder with Python:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000/`. Clipboard access is most reliable on HTTPS or localhost. Run the optional tests with Node.js:

```sh
node tests/geometry.test.cjs
```

Python and Node.js are only local development conveniences. Visitors and GitHub Pages do not need either installed.

## Scope and limitations

- Nine right-triangle input pairs and six minor-circle-arc input pairs are supported.
- Length units: mm, cm, m, in, and ft. Enter decimal numbers; feet-and-inches strings are not parsed.
- Changing the unit reinterprets existing numbers; it does not convert them.
- All angles are degrees. The circle solver covers central angles greater than 0° and at most 180°.
- The diagram is illustrative. Very narrow triangle legs have a minimum display size for visibility.
- Calculations happen in the browser. There is no login, application database, analytics, or network request for the entered values. Reloading or switching tools clears the working inputs and parameter names.
- No installable PWA, service worker, saved projects, or automated Revit connection is included.
- Numerical tests do not prove that every expression is accepted by every Revit version or family. Validate in a test family, then flex its inputs before production use.

## Attribution and references

This is an independent implementation inspired by the practical idea of choosing two known geometry values. It does not reproduce Paul F. Aubin's branding or artwork and is not affiliated with him or Autodesk.

- [Paul F. Aubin's original Formula Finder project](https://www.kickstarter.com/projects/paulaubin/formula-finder-for-revit-by-paul-f-aubin)
- [Autodesk: Valid Formula Syntax and Abbreviations](https://help.autodesk.com/cloudhelp/2022/ENU/Revit-Model/files/GUID-B37EA687-2BDF-4712-9951-2088B2A8E523.htm)

No open-source license has been selected in this package. Choose one before inviting reuse under specific license terms.
