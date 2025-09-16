#!/usr/bin/env python3
import os
import json

# Root directory where all folders are present
ROOT_DIR = "./emoji_data"

def unicode_to_emoji(unicode_str):
    """
    Convert 'U+1F3FE' or ['U+1F3FE', 'U+200D', 'U+2640'] style unicode(s) to emoji string.
    """
    if isinstance(unicode_str, str):
        codepoints = [unicode_str]
    elif isinstance(unicode_str, list):
        codepoints = unicode_str
    else:
        return None
    
    try:
        chars = [chr(int(cp.replace("U+", ""), 16)) for cp in codepoints]
        return "".join(chars)
    except Exception as e:
        print(f"Failed converting {unicode_str}: {e}")
        return None


def process_json(folder):
    json_path = os.path.join(ROOT_DIR, folder, f"{folder}.json")
    if not os.path.exists(json_path):
        print(f"⚠️ JSON not found for {folder}")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Always add given_category
    data["given_category"] = "People & Body"

    # If code is missing, try to build from unicode
    if "code" not in data or not data["code"]:
        if "unicode" in data:
            emoji = unicode_to_emoji(data["unicode"])
            if emoji:
                data["code"] = emoji
                print(f"✅ Added code for {folder}: {emoji}")
            else:
                print(f"❌ Could not convert unicode for {folder}")
        else:
            print(f"❌ No unicode field for {folder}, skipping code assignment")

    # Save back
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def main():
    # List of folders (from your provided list, remove "undefined")
    folders = [
        "ballot-box-with-check",
        "heavy-check-mark",
        "heavy-heart-exclamation",
        "heavy-multiplication-x",
        "man-in-business-suit-levitating",
        "raised-hand-with-fingers-splayed",
        "dark-skin-tone",
        "detective-dark-skin-tone",
        "detective-light-skin-tone",
        "detective-medium-dark-skin-tone",
        "detective-medium-light-skin-tone",
        "detective-medium-skin-tone",
        "index-pointing-up-dark-skin-tone",
        "index-pointing-up-light-skin-tone",
        "index-pointing-up-medium-dark-skin-tone",
        "index-pointing-up-medium-light-skin-tone",
        "index-pointing-up-medium-skin-tone",
        "light-skin-tone",
        "man-bouncing-ball-dark-skin-tone",
        "man-bouncing-ball-light-skin-tone",
        "man-bouncing-ball-medium-dark-skin-tone",
        "man-bouncing-ball-medium-light-skin-tone",
        "man-bouncing-ball-medium-skin-tone",
        "man-detective-dark-skin-tone",
        "man-detective-light-skin-tone",
        "man-detective-medium-dark-skin-tone",
        "man-detective-medium-light-skin-tone",
        "man-detective-medium-skin-tone",
        "man-golfing-dark-skin-tone",
        "man-golfing-light-skin-tone",
        "man-golfing-medium-dark-skin-tone",
        "man-golfing-medium-light-skin-tone",
        "man-golfing-medium-skin-tone",
        "man-in-business-suit-levitating-dark-skin-tone",
        "man-in-business-suit-levitating-light-skin-tone",
        "man-in-business-suit-levitating-medium-dark-skin-tone",
        "man-in-business-suit-levitating-medium-light-skin-tone",
        "man-in-business-suit-levitating-medium-skin-tone",
        "man-lifting-weights-dark-skin-tone",
        "man-lifting-weights-light-skin-tone",
        "man-lifting-weights-medium-dark-skin-tone",
        "man-lifting-weights-medium-light-skin-tone",
        "man-lifting-weights-medium-skin-tone",
        "medium-dark-skin-tone",
        "medium-light-skin-tone",
        "medium-skin-tone",
        "person-bouncing-ball-dark-skin-tone",
        "person-bouncing-ball-light-skin-tone",
        "person-bouncing-ball-medium-dark-skin-tone",
        "person-bouncing-ball-medium-light-skin-tone",
        "person-bouncing-ball-medium-skin-tone",
        "person-golfing-dark-skin-tone",
        "person-golfing-light-skin-tone",
        "person-golfing-medium-dark-skin-tone",
        "person-golfing-medium-light-skin-tone",
        "person-golfing-medium-skin-tone",
        "person-lifting-weights-dark-skin-tone",
        "person-lifting-weights-light-skin-tone",
        "person-lifting-weights-medium-dark-skin-tone",
        "person-lifting-weights-medium-light-skin-tone",
        "person-lifting-weights-medium-skin-tone",
        "raised-hand-with-fingers-splayed-dark-skin-tone",
        "raised-hand-with-fingers-splayed-light-skin-tone",
        "raised-hand-with-fingers-splayed-medium-dark-skin-tone",
        "raised-hand-with-fingers-splayed-medium-light-skin-tone",
        "raised-hand-with-fingers-splayed-medium-skin-tone",
        "victory-hand-dark-skin-tone",
        "victory-hand-light-skin-tone",
        "victory-hand-medium-dark-skin-tone",
        "victory-hand-medium-light-skin-tone",
        "victory-hand-medium-skin-tone",
        "woman-bouncing-ball-dark-skin-tone",
        "woman-bouncing-ball-light-skin-tone",
        "woman-bouncing-ball-medium-dark-skin-tone",
        "woman-bouncing-ball-medium-light-skin-tone",
        "woman-bouncing-ball-medium-skin-tone",
        "woman-detective-dark-skin-tone",
        "woman-detective-light-skin-tone",
        "woman-detective-medium-dark-skin-tone",
        "woman-detective-medium-light-skin-tone",
        "woman-detective-medium-skin-tone",
        "woman-golfing-dark-skin-tone",
        "woman-golfing-light-skin-tone",
        "woman-golfing-medium-dark-skin-tone",
        "woman-golfing-medium-light-skin-tone",
        "woman-golfing-medium-skin-tone",
        "woman-lifting-weights-dark-skin-tone",
        "woman-lifting-weights-light-skin-tone",
        "woman-lifting-weights-medium-dark-skin-tone",
        "woman-lifting-weights-medium-light-skin-tone",
        "woman-lifting-weights-medium-skin-tone",
        "writing-hand-dark-skin-tone",
        "writing-hand-light-skin-tone",
        "writing-hand-medium-dark-skin-tone",
        "writing-hand-medium-light-skin-tone",
        "writing-hand-medium-skin-tone"
    ]

    for folder in folders:
        process_json(folder)


if __name__ == "__main__":
    main()
