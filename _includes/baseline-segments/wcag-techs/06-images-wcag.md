### WCAG 2.2 Techniques

The following sufficient techniques and/or common failures were considered when developing this test procedure for this baseline requirement:

<ul class="wcag-techniques">
{% if page.source == "Web" %}
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6">ARIA6: Using aria-label to provide labels for objects</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA15">ARIA15: Using aria-describedby to provide descriptions of images</a></li>
{% endif %}
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/css/C9">C9: Using CSS to include decorative images</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/failures/F3">F3: Using CSS to include images that convey important information</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/failures/F20">F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/failures/F30">F30: Failure of Success Criterion 1.1.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/failures/F38">F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML</a> in a way that allows assistive technology to ignore them</li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/failures/F39">F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image")</a> for images that should be ignored by assistive technology</li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/failures/F65">F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative</a> on img elements, area elements, and input elements of type = "image"</li>
{% if page.source == "Doc" %}
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G94">G94: Providing short text alternative for non-text content</a> that serves the same purpose and presents the same information as the non-text content</li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G95">G95: Providing short text alternatives that provide a brief description of the non-text content</a></li>
{% endif %}
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G143">G143: Providing a text alternative that describes the purpose of the CAPTCHA</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G144">G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H36">H36: Using alt attributes on images used as submit buttons</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H37">H37: Using alt attributes on img elements</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H67">H67: Using null alt text and no title attribute on img elements for images that AT should ignore</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H86">H86: Providing text alternatives for ASCII art, emoticons, and leetspeak</a></li>
{% if page.source == "Doc" %}
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF1">PDF1: Applying text alternatives to images with the Alt entry in PDF documents</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF4">PDF4: Hiding decorative images with the Artifact tag in PDF documents</a></li>
	<li><a href="https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF7">PDF7: Performing OCR on a scanned PDF document to provide actual text</a></li>
{% endif %}
	<li><a href="https://www.w3.org/WAI/tutorials/images/decorative/">W3C Tutorial: Decorative Images</a></li>
	<li><a href="https://www.w3.org/WAI/tutorials/images/functional/">W3C Tutorial: Functional Images</a></li>
	<li><a href="https://www.w3.org/WAI/tutorials/images/informative/">W3C Tutorial: Informative Images</a></li>
</ul>
