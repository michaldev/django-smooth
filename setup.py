import os
from setuptools import setup

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.md')).read()

setup(
    name='django-smooth',
    version='0.1',
    packages=['smooth'],
    description='Hybrid solution for dynamic UX in Django without JS.',
    long_description=README,
    author='Michal Rosiak',
    author_email='michal.rosiak.dev@gmail.com',
    url='https://github.com/michaldev/django-smooth',
    license='MIT',
    install_requires=[
        'Django>=3.0,<4.0',
    ]
)