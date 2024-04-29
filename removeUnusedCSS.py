import cssutils
import re
from bs4 import BeautifulSoup
import logging  # Add this line to import the logging module

def remove_unused_css(html_file_path, css_file_path, output_css_file_path=None):
    # Read the HTML file
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Parse the HTML to find all classes and IDs
    soup = BeautifulSoup(html_content, 'html.parser')
    used_classes = {cls for tag in soup.find_all(class_=True) for cls in tag['class']}
    used_ids = {tag['id'] for tag in soup.find_all(id=True)}

    # Parse the CSS file
    css_parser = cssutils.CSSParser(loglevel=logging.CRITICAL)  # Suppress cssutils warnings
    stylesheet = css_parser.parseFile(css_file_path)
    
    # Check CSS rules and keep those with used classes or IDs
    new_stylesheet = cssutils.css.CSSStyleSheet()
    for rule in stylesheet:
        if isinstance(rule, cssutils.css.CSSStyleRule):
            selectors = rule.selectorList
            rule_used = False
            for selector in selectors:
                selector_text = selector.selectorText
                if any(cls in selector_text for cls in used_classes) or \
                   any(id in selector_text for id in used_ids):
                    rule_used = True
                    break
            if rule_used:
                new_stylesheet.add(rule)

    # Output the updated CSS
    output_css = new_stylesheet.cssText.decode('utf-8')
    output_css_file_path = output_css_file_path or css_file_path
    with open(output_css_file_path, 'w', encoding='utf-8') as file:
        file.write(output_css)

# Example usage
remove_unused_css('postup-page-v3.html', 'postup-styles.css', 'postup-styles-streamlined.css')