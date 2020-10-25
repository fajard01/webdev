# file.py
# file management to prepare database values

import os

# set a directory you're interested in
# working_dir = r'/home/webdev/perufiles/img'


def get_filenames_with_ext(ext, work_dir):
    """ extracts filenames with a file extension
        from given directory
    :param ext: file extension to filter
    :param work_dir: directory to extract list of filenames from
    :return: a list of al the filtered files"""
    filenames = []
    # get a list of all the files in the directory
    names = os.listdir(work_dir)

    # look at each file and decide if you like it (say, ends '.ABC')
    for name in names:
        file_ext = os.path.splitext(name)[-1]
        if ext == file_ext:
            filenames.append(name)

    return filenames


def get_filenames_without_ext(work_dir):
    """ extract list of files without extension
    :param work_dir:
    :return: a list of filenames
    """
    filenames = []
    # get a list of all the files in the directory
    names = os.listdir(work_dir)

    # the same, but looking for filenames without an extension
    for name in names:
        file_ext = os.path.splitext(name)[-1]
        if '' == file_ext:
            filenames.append(name)

    return filenames


def move_files_with_ext(ext, src_dir, dst_dir):
    """ move files with a file extension {ext}
        from source directory to destination directory
    :param ext: file extension to filter
    :param src_dir: directory to extract list of filenames from
    :param dst_dir: destination directory to write files to
    :param ext: file extension to filter
    """
    # get a list of all the files in the directory
    names = os.listdir(src_dir)

    # look at each file and decide if you like it (say, ends '.ABC')
    for name in names:
        file_ext = os.path.splitext(name)[-1]
        if ext == file_ext:
            os.rename(f'{src_dir}/{name}', f'{dst_dir}/{name}')


def move_files_without_ext(src_dir, dst_dir):
    """ move files without extension from source directory
        to destination directory
    :param src_dir: source directory of files
    :param dst_dir: destination directory to write files
    """
    # get a list of all the files in the directory
    names = os.listdir(src_dir)

    # the same, but looking for filenames without an extension
    for name in names:
        file_ext = os.path.splitext(name)[-1]
        if '' == file_ext:
            os.rename(f'{src_dir}/{name}', f'{dst_dir}/{name}')


def move_rename_files(src_dir, dst_dir, *args, **kwargs):
    """ move files without extension from source directory
        to destination directory
    :param src_dir: source directory of files
    :param dst_dir: destination directory to write files
    """
    # get a list of all the files in the directory
    names = os.listdir(src_dir)

    # the same, but looking for filenames without an extension
    i = 281
    for name in names:
        os.rename(f'{src_dir}/{name}', f'{dst_dir}/{str(i)}_m.jpeg')
        i += 1
