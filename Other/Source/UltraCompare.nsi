;Copyright (C) 2004-2007 John T. Haller
;Copyright (C) 2007 Ryan McCue
;Copyright (C) 2008-2009 Oliver Krystal

;Website: http://PortableApps.com/PNotesPortable

;This software is OSI Certified Open Source Software.
;OSI Certified is a certification mark of the Open Source Initiative.

;This program is free software; you can redistribute it and/or
;modify it under the terms of the GNU General Public License
;as published by the Free Software Foundation; either version 2
;of the License, or (at your option) any later version.

;This program is distributed in the hope that it will be useful,
;but WITHOUT ANY WARRANTY; without even the implied warranty of
;MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;GNU General Public License for more details.

;You should have received a copy of the GNU General Public License
;along with this program; if not, write to the Free Software
;Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
!define PORTABLEAPPNAME "UltraCompare Portable"
!define APPNAME "UltraCompare"
!define NAME "UltraComparePortable"
!define VER "1.6.1.0"
!define WEBSITE "www.ultraedit.com"
!define DEFAULTEXE "uc.exe"
!define DEFAULTAPPDIR "UltraCompare"
!define DEFAULTSETTINGSDIR "settings"
!define LAUNCHERLANGUAGE "english"

;=== Program Details
Name "${PORTABLEAPPNAME}"
OutFile "..\..\${NAME}.exe"
Caption "${PORTABLEAPPNAME} | PortableApps.com"
VIProductVersion "${VER}"
VIAddVersionKey ProductName "${PORTABLEAPPNAME}"
VIAddVersionKey Comments "Allows ${APPNAME} to be run from a removable drive.  For additional details, visit ${WEBSITE}"
VIAddVersionKey CompanyName "PortableApps.com"
VIAddVersionKey LegalCopyright "PortableApps.com & Contributors"
VIAddVersionKey FileDescription "${PORTABLEAPPNAME}"
VIAddVersionKey FileVersion "${VER}"
VIAddVersionKey ProductVersion "${VER}"
VIAddVersionKey InternalName "${PORTABLEAPPNAME}"
VIAddVersionKey LegalTrademarks "PortableApps.com is a Trademark of Rare Ideas, LLC."
VIAddVersionKey OriginalFilename "${NAME}.exe"

;=== Runtime Switches
CRCCheck On
WindowIcon Off
SilentInstall Silent
AutoCloseWindow True
RequestExecutionLevel user

; Best Compression
SetCompress Auto
SetCompressor /SOLID lzma
SetCompressorDictSize 32
SetDatablockOptimize On

;=== Program Icon
Icon "..\..\App\AppInfo\appicon.ico" ;defines the icon for the script

;=== Include
;(Standard NSIS)
!include FileFunc.nsh
!insertmacro GetParameters ;Requires NSIS 2.40 or better

;=== Icon & Stye ===
!define MUI_ICON "..\..\App\AppInfo\appicon.ico"

;(Custom)

;=== Languages
LoadLanguageFile "${NSISDIR}\Contrib\Language files\${LAUNCHERLANGUAGE}.nlf"
!include PortableApps.comLauncherLANG_${LAUNCHERLANGUAGE}.nsh


Var PROGRAMDIRECTORY
Var SETTINGSDIRECTORY
Var EXECSTRING
Var PROGRAMEXECUTABLE
Var DISABLESPLASHSCREEN
Var APPLANGUAGE
Var ADDITIONALPARAMETERS
Var MISSINGFILEORPATH
Var Params

Function .onInit
    ${GetParameters} $0
    StrCpy $Params $0
    onInitDone:
FunctionEnd

Section "Main"

        ;FoundProgramEXE:
			;=== Check if running
			;FindProcDLL::FindProc "$PROGRAMEXECUTABLE"
			;StrCmp $R0 "1" WarnAnotherInstance DisplaySplash
        LaunchNow:
        StrCpy $PROGRAMDIRECTORY "$EXEDIR\App\UltraCompare\ucp.exe"
        StrCpy $EXECSTRING '$PROGRAMDIRECTORY $Params'
		;StrCpy $EXECSTRING `"$PROGRAMDIRECTORY\$PROGRAMEXECUTABLE" "$ADDITIONALPARAMETERS" -conf "$SETTINGSDIRECTORY" "$SETTINGSDIRECTORY" "$EXEDIR\${NAME}.exe"`
                Exec $EXECSTRING
                ;Sleep 2000 ;=== allow the splash screen to show for at least 2 seconds after starting
                ;newadvsplash::stop /WAIT
SectionEnd