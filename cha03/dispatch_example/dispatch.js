#!/usr/bin/env sh
/*usr/bin/env true
export NODE_PATH="$NODE_PATH:/usr/local/lib/opa/static:/usr/local/lib/opa/stdlib:/usr/local/lib/opa/stdlib/stdlib.qmljs:`which npm > /dev/null 2>&1 && npm root -g`:node_modules:"


node=`which nodejs`
if [ -z "$node" ]; then
    node=`which node`
fi
if [ -z "$node" ] || [ ! -x "$node" ]; then

    NODE_VERSION=v0.10.10

    # Detect OS
    IS_LINUX=""
    IS_MAC=""
    IS_WINDOWS=""
    IS_FREEBSD=""
    case $(uname) in
    CYGWIN*) IS_WINDOWS=1;;
    Darwin*) IS_MAC=1;;
    Linux*|GNU/kFreeBSD) IS_LINUX=1;;
    FreeBSD) IS_FREEBSD=1;;
    *)
            echo "Error: could not detect OS. Defaulting to Linux" >&2
            IS_LINUX=1
    esac

    echo "node.js is missing, Download and install it ? (no will abort) [Yn] \c"
    read yesno
    case "$yesno" in
        y|Y|yes|YES)
        if [ -n "$IS_MAC" ]; then
        port=`which port 2>&1`
        if [ $? -eq 0 ] && [ -x "$port" ]; then
            echo "--> Installing via MacPorts...";
            sudo port install nodejs
        else
            brew=`which brew 2>&1`
            if [ $? -eq 0 ] && [ -x "$brew" ]; then
            echo "--> Installing via Homebrew...";
            brew install node # Warning: brew installs are known to be buggy
            else
            if ! [ -f /tmp/node-$NODE_VERSION.pkg ]; then
                NODE_URL=http://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION.pkg
                echo "--> Downloading $NODE_URL..."
                curl $NODE_URL > /tmp/node-$NODE_VERSION.pkg
            fi
            echo "--> Opening Node installer $NODE_VERSION, please follow the instructions and then relaunch this application"
            open /tmp/node-$NODE_VERSION.pkg
        exit 1
            fi
        fi
        elif [ -n "$IS_LINUX" ]; then
        case $(uname -v) in
            *Ubuntu*)
            sudo apt-get install python-software-properties
            sudo add-apt-repository ppa:chris-lea/node.js
            sudo apt-get update
            sudo apt-get install nodejs
            ;;
            *)
            echo "--> node.js is missing, please install node.js from: http://nodejs.org"
            exit 1
        esac
        else
        echo "--> node.js is missing, please install node.js from: http://nodejs.org"
        exit 1

        fi;;
    *) echo "--> Aborting..."; exit 1
    esac

fi;

if [ $? -ne 0 ]; then exit $?; fi;
$node "$0" "$@"; exit $?;

*/


var min_node_version = '0.10.10';

/**
 * Compare two versions, string separated with dots
 * @return true if version1 >= version2
 */
function geVersion(version1, version2) {
		var v1 = version1.toString().split('.');
		var v2 = version2.toString().split('.');
    for (var i=0; i<(Math.max(v1.length,v2.length)); i++) {
        if (v1[i]==undefined) v1[i]=0;
        if (v2[i]==undefined) v2[i]=0;
        if (Number(v1[i]) < Number(v2[i])) return false;
				if (Number(v1[i]) > Number(v2[i])) break;
    }
    return true;
}

if (min_node_version && !geVersion(process.versions.node, min_node_version)) {
    console.error('Your version of node seems to be too old. Please upgrade to a more recent version of node (>= '+min_node_version+')');
    process.exit(1);
}

require('opa-js-runtime-cps');
check_opa_deps(['opabsl.opp', 'intl-messageformat', 'intl']);
require("opa-js-runtime-cps");
require("opabsl.opp");
require("stdlib.core.web.server.opx");
var ___server_ast = BslCps_topwait(___register_server_code_ec6de8cf({package_:"",adhoc_e:[{td:[],rd:[],r:[true],id:["`_v1_Server_private_run_services_stdlib.core.web.server`"],i:{some:"_v1_run_services"},d:js_void,c:{none:js_void}},{td:[],rd:[],r:[true],id:["_v1_start","`_v1_start_stdlib.core.web.server`"],i:{some:"_v1__do_"},d:js_void,c:{none:js_void}},{td:[],rd:[],r:[false],id:["`_v5_page_stdlib.core.web.resource`"],i:{some:"_v1_start"},d:js_void,c:{none:js_void}}]},cont(BslCps_topk)));
global.___start = function ___start(a,b){var c;return (a = a.path,c = a.tl) && (a = a.hd,a === "bold")?__v1_page_01d140d3("Bold",{specific_attributes:{none:js_void},xmlns:{nil:js_void},content:{tl:{nil:js_void},hd:{text:"Bold"}},args:{nil:js_void},tag:"b",namespace:""},b):c && a === "italic"?__v1_page_01d140d3("Italic",{specific_attributes:{none:js_void},xmlns:{nil:js_void},content:{tl:{nil:js_void},hd:{text:"Italic"}},args:{nil:js_void},tag:"i",namespace:""},b):__v1_page_01d140d3("Regular",{specific_attributes:{none:js_void},xmlns:{nil:js_void},content:{tl:{nil:js_void},hd:{text:"Regular"}},args:{nil:js_void},tag:"p",namespace:""},b);};
var ____do_ = BslCps_topwait(___start_b970f080(___http_b970f080,{dispatch:___start},cont(BslCps_topk)));
var ___run_services = BslCps_topwait(___run_services_b970f080(cont(BslCps_topk)));
